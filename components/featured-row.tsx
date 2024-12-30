import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { themeColors } from '@/theme';
import RestaurantCard from './restaurant-card';

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
}

export interface Restaurant {
  id: number;
  name: string;
  image: any;
  description: string;
  lng: number;
  lat: number;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  dishes: Dish[];
}

interface FeaturedRowProps {
  title: string;
  restaurants: Restaurant[];
  description: string;
}

export default function FeaturedRow({
  title,
  restaurants,
  description,
}: FeaturedRowProps) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-sm">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} item={restaurant} />;
        })}
      </ScrollView>
    </View>
  );
}