import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navbarApi } from "@/api/navbarApi";
import { NavbarState, UpdateNavBar } from "@/interface";

const initialState: NavbarState = {
  navbars: [],
  status: "idle",
  error: null,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        navbarApi.endpoints.getNavbars.matchFulfilled,
        (state, action: PayloadAction<UpdateNavBar[]>) => {
          state.status = "succeeded";
          state.navbars = action.payload;
        }
      )
      .addMatcher(navbarApi.endpoints.getNavbars.matchPending, (state) => {
        state.status = "loading";
      })
      .addMatcher(
        navbarApi.endpoints.getNavbars.matchRejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message || null;
        }
      )
      .addMatcher(
        navbarApi.endpoints.createNavbar.matchFulfilled,
        (state, action: PayloadAction<UpdateNavBar>) => {
          state.navbars.push(action.payload);
        }
      )
      .addMatcher(
        navbarApi.endpoints.updateNavbar.matchFulfilled,
        (state, action: PayloadAction<UpdateNavBar>) => {
          const index = state.navbars.findIndex(
            (navbar) => navbar.id === action.payload.id
          );
          if (index !== -1) {
            state.navbars[index] = action.payload;
          }
        }
      )
      .addMatcher(
        navbarApi.endpoints.deleteNavbar.matchFulfilled,
        (state, action: PayloadAction<number>) => {
          state.navbars = state.navbars.filter(
            (navbar) => navbar.id !== action.payload
          );
        }
      );
  },
});

export default navbarSlice.reducer;
