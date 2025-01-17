import { ClientFeedbackInterface, ClientFeedbackState } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ClientFeedbackState = {
  clientFeedbacks: [],
};

const clientFeedbackSlice = createSlice({
  name: "clientFeedback",
  initialState,
  reducers: {
    setClientFeedbacks: (
      state,
      action: PayloadAction<Array<ClientFeedbackInterface>>
    ) => {
      state.clientFeedbacks = action.payload;
    },
    addClientFeedback: (
      state,
      action: PayloadAction<ClientFeedbackInterface>
    ) => {
      state.clientFeedbacks.push(action.payload);
    },
    updateClientFeedback: (
      state,
      action: PayloadAction<ClientFeedbackInterface>
    ) => {
      const index = state.clientFeedbacks.findIndex(
        (userimage) => userimage.id === action.payload.id
      );
      if (index !== -1) {
        state.clientFeedbacks[index] = action.payload;
      }
    },
    deleteClientFeedback: (state, action: PayloadAction<number>) => {
      const index = state.clientFeedbacks.findIndex(
        (userimage) => userimage.id === action.payload
      );
      if (index !== -1) {
        state.clientFeedbacks.splice(index, 1);
      }
    },
  },
});

export const {
  setClientFeedbacks,
  addClientFeedback,
  updateClientFeedback,
  deleteClientFeedback,
} = clientFeedbackSlice.actions;
export default clientFeedbackSlice.reducer;
