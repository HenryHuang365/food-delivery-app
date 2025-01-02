import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCategories } from '@/api';
import { urlFor } from '@/sanity';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Category {
  _id: string;
  name: string;
  image: SanityImageSource;
}

export default function Categories() {
  const [isActive, setIsActive] = useState<string>();

  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getCategories().then((data: Category[]) => {
      setCategories(data);
    });
  }, []);
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible mt-2"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((category, index) => {
          const isSelected = isActive === category._id;
          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setIsActive(category._id)}
                className={`${isSelected ? 'p-1 rounded-full shadow bg-gray-600' : 'p-1 rounded-full shadow bg-gray-200'}`}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{ uri: urlFor(category.image).url() }}
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
