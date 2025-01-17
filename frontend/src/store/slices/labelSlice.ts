import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { labelApi } from "@/api/labelApi";
import { LabelState, UpdateLabel } from "@/interface";

const initialState: LabelState = {
  labels: [],
  status: "idle",
  error: null,
};

const labelSlice = createSlice({
  name: "label",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        labelApi.endpoints.getLabels.matchFulfilled,
        (state, action: PayloadAction<UpdateLabel[]>) => {
          state.status = "succeeded";
          state.labels = action.payload;
        }
      )
      .addMatcher(labelApi.endpoints.getLabels.matchPending, (state) => {
        state.status = "loading";
      })
      .addMatcher(
        labelApi.endpoints.getLabels.matchRejected,
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message || null;
        }
      )
      .addMatcher(
        labelApi.endpoints.createLabel.matchFulfilled,
        (state, action: PayloadAction<UpdateLabel>) => {
          state.labels.push(action.payload);
        }
      )
      .addMatcher(
        labelApi.endpoints.updateLabel.matchFulfilled,
        (state, action: PayloadAction<UpdateLabel>) => {
          const index = state.labels.findIndex(
            (label) => label.id === action.payload.id
          );
          if (index !== -1) {
            state.labels[index] = action.payload;
          }
        }
      )
      .addMatcher(
        labelApi.endpoints.deleteLabel.matchFulfilled,
        (state, action: PayloadAction<number>) => {
          state.labels = state.labels.filter(
            (label) => label.id !== action.payload
          );
        }
      );
  },
});

export default labelSlice.reducer;
