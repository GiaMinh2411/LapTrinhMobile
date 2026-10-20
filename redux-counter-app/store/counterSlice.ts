import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',

  initialState,

  reducers: {
    // Tăng giá trị lên 1
    increment: (state) => {
      state.value += 1;
    },

    // Giảm giá trị đi 1
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;