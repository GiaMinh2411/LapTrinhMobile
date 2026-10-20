import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Kiểu dữ liệu toàn bộ state
export type RootState = ReturnType<typeof store.getState>;

// Kiểu của dispatch
export type AppDispatch = typeof store.dispatch;