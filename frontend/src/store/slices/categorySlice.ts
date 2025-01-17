import { CategoryState, UpdateCategory } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CategoryState = {
  categories: [],
};

const brandLogoSlice = createSlice({
  name: "brandLogo",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Array<UpdateCategory>>) => {
      state.categories = action.payload;
    },
    addCategory: (state, action: PayloadAction<UpdateCategory>) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action: PayloadAction<UpdateCategory>) => {
      const index = state.categories.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.categories = [
          ...state.categories.slice(0, index),
          action.payload,
          ...state.categories.slice(index + 1),
        ];
      }
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      const index = state.categories.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.categories.splice(index, 1);
      }
    },
  },
});

export const { setCategories, addCategory, updateCategory, deleteCategory } =
  brandLogoSlice.actions;
export default brandLogoSlice.reducer;
