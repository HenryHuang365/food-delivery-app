import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { categories } from '@/constants';

export default function Categories() {
  const [isActive, setIsActive] = useState<number>();
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible mt-2"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          const isSelected = isActive === category.id;
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setIsActive(category.id)}
                className={`${isSelected ? 'p-1 rounded-full shadow bg-gray-600' : 'p-1 rounded-full shadow bg-gray-200'}`}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text
                className={`${isSelected ? 'text-sm text-gray-800 font-semibold' : 'text-sm text-gray-500'}`}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
