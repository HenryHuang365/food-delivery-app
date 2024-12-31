import { Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import delivery from '../assets/images/delivery.gif';

export default function OrderPrepareScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/delivery-screen');
    }, 3000);
  }, []);

  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={delivery} className="h-80 w-80" />
    </View>
  );
}
