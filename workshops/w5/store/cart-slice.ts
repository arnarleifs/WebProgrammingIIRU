import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/data/products";

type CartState = {
  cart: Product[];
};

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      state.cart.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
