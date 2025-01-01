import { Stack } from 'expo-router';
import '../global.css';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="restaurant-screen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cart-screen"
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen
          name="order-prepare-screen"
          options={{ headerShown: false, presentation: 'fullScreenModal' }}
        />
        <Stack.Screen
          name="delivery-screen"
          options={{ headerShown: false, presentation: 'fullScreenModal' }}
        />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </Provider>
  );
}
