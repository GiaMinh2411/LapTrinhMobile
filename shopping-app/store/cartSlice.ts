import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Thông tin sản phẩm trước khi thêm vào giỏ
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Sản phẩm trong giỏ có thêm số lượng
export interface CartItem extends Product {
  quantity: number;
}

// Cấu trúc state của giỏ hàng
interface CartState {
  items: CartItem[];
}

// Giỏ hàng ban đầu rỗng
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    // 1. Thêm sản phẩm vào giỏ
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;

      // Tìm vị trí của sản phẩm trong giỏ
      const index = state.items.findIndex(
        (item) => item.id === product.id
      );

      if (index >= 0) {
        // Đã có sản phẩm: tăng số lượng
        state.items[index].quantity += 1;
      } else {
        // Chưa có sản phẩm: thêm mới với số lượng 1
        state.items.push({
          ...product,
          quantity: 1,
        });
      }
    },

    // 2. Xóa một sản phẩm theo id
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    // 3. Cập nhật số lượng
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        quantity: number;
      }>
    ) => {
      const { id, quantity } = action.payload;

      // Nếu số lượng <= 0 thì xóa sản phẩm
      if (quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== id
        );
        return;
      }

      // Chỉ nhận số lượng nguyên hợp lệ
      if (!Number.isInteger(quantity)) {
        return;
      }

      const item = state.items.find(
        (item) => item.id === id
      );

      if (item) {
        item.quantity = quantity;
      }
    },

    // 4. Xóa toàn bộ giỏ hàng
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;