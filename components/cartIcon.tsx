import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '@/theme';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectCartItems } from '@/slices/cart-slice';

export default function CartIcon() {
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);
  if (cartItems.length === 0) return; // If no items are added, do not show cart icon.

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => router.push('/cart-screen')}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        <View
          className="p-2 px-4 rounded-full"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        >
          <Text className="font-extrabold text-white text-lg">3</Text>
        </View>
        <Text className="flex-1 text-center font-extrabold text-white text-lg">
          View Cart
        </Text>
        <Text className="font-extrabold text-white text-lg">${23}</Text>
      </TouchableOpacity>
    </View>
  );
}
