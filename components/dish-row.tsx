import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Dish } from './featured-row';
import { themeColors } from '@/theme';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectCartItems,
} from '@/slices/cart-slice';
import { urlFor } from '@/sanity';

interface DishRowProps {
  dish: Dish;
}

export default function DishRow({ dish }: DishRowProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalItems = cartItems.filter((c) => c._id === dish._id);
  const handleIncrease = () => {
    dispatch(addToCart({ ...dish }));
  };

  const handleDecrease = () => {
    dispatch(removeFromCart({ id: dish._id }));
  };

  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={{ uri: urlFor(dish.image).url() }}
      />
      <View className="flex-col flex-1 gap-3">
        <View className="pl-3">
          <Text className="text-xl">{dish.name}</Text>
          <Text className="text-gray-700">{dish.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
          <Text className="text-gray-700 text-lg font-bold">${dish.price}</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={handleDecrease}
              disabled={totalItems.length === 0}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>

            <Text className="px-3">{totalItems.length}</Text>

            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Icon.Plus
                strokeWidth={2}
                height={20}
                width={20}
                stroke={'white'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
