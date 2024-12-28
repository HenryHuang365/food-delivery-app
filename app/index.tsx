import { Text, TextInput, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { themeColors } from '@/theme';
import Categories from '@/components/categories';

export default function Index() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />
      {/* Search Bar */}
      <View className="flex-row items-center gap-2 px-4 py-2">
        <View className="flex-row items-center flex-1 justify-between gap-1 p-3 rounded-full border border-gray-300">
          <View className="flex flex-row items-center flex-1">
            <Icon.Search height={25} width={25} stroke="gray" />
            <TextInput placeholder="Restaurant" className="w-0 flex-1 ml-1" />
          </View>
          <View className="flex-row items-center gap-1 border-0 border-l-2 pl-2 border-gray-300 shrink">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text
              className="text-gray-600 shrink"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Sydney, AU
            </Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full"
        >
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>

      {/* Main Page */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
