import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    portfolioDetails: []
  }

export const portfolioDetailsSlice = createSlice({
    name: 'portfolioDetails',
    initialState,
    reducers: {
        setPortfolioDetails: (state, action) => {
        state.portfolioDetails = action.payload
        },
    },
})

export const { setPortfolioDetails } = portfolioDetailsSlice.actions


export default portfolioDetailsSlice.reducer