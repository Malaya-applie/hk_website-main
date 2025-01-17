import { SocialMediaState, UpdateSocialMedia } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SocialMediaState = {
  socialMedias: [],
};

const socialMediaSlice = createSlice({
  name: "socialMedia",
  initialState,
  reducers: {
    setSocialMedias: (
      state,
      action: PayloadAction<Array<UpdateSocialMedia>>
    ) => {
      state.socialMedias = action.payload;
    },
    addSocialMedia: (state, action: PayloadAction<UpdateSocialMedia>) => {
      state.socialMedias.push(action.payload);
    },
    updateSocialMedia: (state, action: PayloadAction<UpdateSocialMedia>) => {
      const index = state.socialMedias.findIndex(
        (logo) => logo.id === action.payload.id
      );
      if (index !== -1) {
        state.socialMedias = [
          ...state.socialMedias.slice(0, index),
          action.payload,
          ...state.socialMedias.slice(index + 1),
        ];
      }
    },
    deleteSocialMedia: (state, action: PayloadAction<number>) => {
      const index = state.socialMedias.findIndex(
        (logo) => logo.id === action.payload
      );
      if (index !== -1) {
        state.socialMedias.splice(index, 1);
      }
    },
  },
});

export const {
  setSocialMedias,
  addSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
} = socialMediaSlice.actions;
export default socialMediaSlice.reducer;
