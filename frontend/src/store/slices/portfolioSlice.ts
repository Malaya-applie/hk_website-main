import { PortfolioInterface, PortfolioState } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PortfolioState = {
  portfolios: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPortfolios: (
      state,
      action: PayloadAction<Array<PortfolioInterface>>
    ) => {
      state.portfolios = action.payload;
    },
    addPortfolio: (state, action: PayloadAction<PortfolioInterface>) => {
      state.portfolios.push(action.payload);
    },
    updatePortfolio: (state, action: PayloadAction<PortfolioInterface>) => {
      const index = state.portfolios.findIndex(
        (userimage) => userimage.id === action.payload.id
      );
      if (index !== -1) {
        state.portfolios[index] = action.payload;
      }
    },
    deletePortfolio: (state, action: PayloadAction<number>) => {
      const index = state.portfolios.findIndex(
        (userimage) => userimage.id === action.payload
      );
      if (index !== -1) {
        state.portfolios.splice(index, 1);
      }
    },
  },
});

export const { setPortfolios, addPortfolio, updatePortfolio, deletePortfolio } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
