import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import * as Icon from 'react-native-feather';
import { themeColors } from '@/theme';
import { featured } from '@/constants';
import bikeGuy from '../assets/images/bikeGuy.png';

export default function CartScreen() {
  const router = useRouter();
  const restaurant = featured.restaurants[0];
  return (
    <View className="bg-white flex-1">
      {/* Back Button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* Delivery Time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center justify-between"
      >
        <Image source={bikeGuy} className="w-20 h-20 rounded-full" />
        <Text>Deliver in 20-30 mintues</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-white pt-5"
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center gap-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                2x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="w-0 flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* Totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-col p-6 px-8 rounded-t-3xl gap-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$20</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$2</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Total</Text>
          <Text className="text-gray-700 font-extrabold">$22</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
