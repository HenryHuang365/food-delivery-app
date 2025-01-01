import { Restaurant } from '@/components/featured-row';
import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface RestaurantState {
  restaurant: Restaurant;
}

const initialState = {
  restaurant: null,
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: {
  restaurant: { restaurant: Restaurant };
}) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
