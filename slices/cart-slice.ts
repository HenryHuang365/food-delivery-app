import { Dish } from '@/components/featured-row';
import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
  items: Dish[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload.id,
      );

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: { items: Dish[] } }) =>
  state.cart.items;

export const selectCartTotal = (state: { cart: { items: Dish[] } }) =>
  state.cart.items.reduce((total, item) => (total = total + item.price), 0);

export default cartSlice.reducer;
