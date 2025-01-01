import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '@/slices/restaurant-slice';
import { themeColors } from '@/theme';
import bikeGuy from '../assets/images/bikeGuy2.gif';
import deliveryGuy from '../assets/images/deliveryGuy3.jpg';
import * as Icon from 'react-native-feather';

export default function DeliverScreen() {
  const router = useRouter();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ flex: 1 }}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className="rounded-t-3xl -mt-12 pb-4 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700">Estimated Arrival</Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>
          <Image className="w-24 h-24" source={bikeGuy} />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
          >
            <Image className="h-16 w-16 rounded-full" source={deliveryGuy} />
          </View>
          <View className="w-0 flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Jack Jones</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row gap-3 items-center mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.dismissAll()}
              className="bg-white p-2 rounded-full"
            >
              <Icon.X
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth={4}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
