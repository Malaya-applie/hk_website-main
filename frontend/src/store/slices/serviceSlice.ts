import { UpdateService, ServiceState } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ServiceState = {
  services: [],
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Array<UpdateService>>) => {
      state.services = action.payload;
    },
    addService: (state, action: PayloadAction<UpdateService>) => {
      state.services.push(action.payload);
    },
    updateService: (state, action: PayloadAction<UpdateService>) => {
      const index = state.services.findIndex(
        (service) => service.id === action.payload.id
      );
      if (index !== -1) {
        state.services = [
          ...state.services.slice(0, index),
          action.payload,
          ...state.services.slice(index + 1),
        ];
      }
    },
    deleteService: (state, action: PayloadAction<number>) => {
      const index = state.services.findIndex(
        (service) => service.id === action.payload
      );
      if (index !== -1) {
        state.services.splice(index, 1);
      }
    },
  },
});

export const { setServices, addService, updateService, deleteService } =
  serviceSlice.actions;
export default serviceSlice.reducer;
