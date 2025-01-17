import { BrandLogoState, UpdateBrandLogo } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BrandLogoState = {
  brandLogos: [],
};

const brandLogoSlice = createSlice({
  name: "brandLogo",
  initialState,
  reducers: {
    setBrandLogos: (state, action: PayloadAction<Array<UpdateBrandLogo>>) => {
      state.brandLogos = action.payload;
    },
    addBrandLogo: (state, action: PayloadAction<UpdateBrandLogo>) => {
      state.brandLogos.push(action.payload);
    },
    updateBrandLogo: (state, action: PayloadAction<UpdateBrandLogo>) => {
      const index = state.brandLogos.findIndex(
        (logo) => logo.id === action.payload.id
      );
      if (index !== -1) {
        state.brandLogos = [
          ...state.brandLogos.slice(0, index),
          action.payload,
          ...state.brandLogos.slice(index + 1),
        ];
      }
    },
    deleteBrandLogo: (state, action: PayloadAction<number>) => {
      const index = state.brandLogos.findIndex(
        (logo) => logo.id === action.payload
      );
      if (index !== -1) {
        state.brandLogos.splice(index, 1);
      }
    },
  },
});

export const { setBrandLogos, addBrandLogo, updateBrandLogo, deleteBrandLogo } =
  brandLogoSlice.actions;
export default brandLogoSlice.reducer;
