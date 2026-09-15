import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: {
    id: number;
    task: string;
    isDone: boolean;
  };
}

const initialState: CounterState = {
  value: {
    id: 0,
    task: "",
    isDone: false,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.value.task = action.payload;
    },
    markAsDone: (state) => {
      state.value.isDone = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
