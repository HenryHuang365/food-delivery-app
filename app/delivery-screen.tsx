import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { featured } from '@/constants';

export default function DeliverScreen() {
  const router = useRouter();
  const restaurant = featured.restaurants[0];

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
        />
      </MapView>
    </View>
  );
}
