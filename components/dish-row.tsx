import { Text, View, Image } from 'react-native';
import React from 'react';
import { Dish } from './featured-row';

interface DishRowProps {
  dish: Dish;
}

export default function DishRow({ dish }: DishRowProps) {
  const image = dish.image;
  return (
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl"
        style={{ height: 100, width: 100 }}
        source={image}
      />
      <View className="flex-col flex-1 gap-3">
        <View className="pl-3">
          <Text className="text-xl">{dish.name}</Text>
          <Text className="text-gray-700">{dish.description}</Text>
        </View>
      </View>
    </View>
  );
}
