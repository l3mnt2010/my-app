import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState = { value: 0 } as CounterState;

const counterSlice = createSlice({
  name: "counter", // Đây là prefix cho action type của bạn
  initialState, // Giá trị khởi tạo state cho reducer, cũng có thể là function khởi tạo
  reducers: {
    // key name sẽ được dùng để generate ra action
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
  extraReducers(builder) {
      
  },
});

// export action được generate ra từ slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export reducer được generate ra từ slice
export default counterSlice.reducer;
