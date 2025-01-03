import { Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { Restaurant } from './featured-row';
import fullStar from '../assets/images/fullStar.png';
import * as Icon from 'react-native-feather';
import { themeColors } from '@/theme';
import { useRouter } from 'expo-router';
import { urlFor } from '@/sanity';

interface RestaurantCardProps {
  item: Restaurant;
}

export default function RestaurantCard({ item }: RestaurantCardProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: '/restaurant-screen',
          params: {
            id: item._id,
          },
        })
      }
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7,
        }}
        className="w-64 mr-6 bg-white rounded-3xl shadow-lg"
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={{ uri: urlFor(item.image).url() }}
        />
        <View className="flex-col px-3 pt-2 pb-4 gap-4">
          <Text className="text-lg font-bold">{item.name}</Text>
          <View className="flex-col gap-2">
            <View className="flex-row items-center gap-1">
              <Image source={fullStar} className="h-4 w-4" />
              <Text className="text-xs">
                <Text className="text-green-700">{item.rating} </Text>
                <Text className="text-gray-700">
                  ({item.reviews} reviews) -{' '}
                  <Text className="font-semibold">{item.type.name}</Text>
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Icon.MapPin color="gray" width="15" height="15" />
              <Text
                className="text-gray-700 text-xs pr-6"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Nearby - {item.address}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
