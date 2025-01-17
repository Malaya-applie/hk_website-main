import { CaseStudyInterface, CaseStudyState } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CaseStudyState = {
  caseStudies: [],
};

const caseStudySlice = createSlice({
  name: "caseStudy",
  initialState,
  reducers: {
    setCaseStudies: (
      state,
      action: PayloadAction<Array<CaseStudyInterface>>
    ) => {
      state.caseStudies = action.payload;
    },
    addCaseStudy: (state, action: PayloadAction<CaseStudyInterface>) => {
      state.caseStudies.push(action.payload);
    },
    updateCaseStudy: (state, action: PayloadAction<CaseStudyInterface>) => {
      const index = state.caseStudies.findIndex(
        (userimage) => userimage.id === action.payload.id
      );
      if (index !== -1) {
        state.caseStudies[index] = action.payload;
      }
    },
    deleteCaseStudy: (state, action: PayloadAction<number>) => {
      const index = state.caseStudies.findIndex(
        (userimage) => userimage.id === action.payload
      );
      if (index !== -1) {
        state.caseStudies.splice(index, 1);
      }
    },
  },
});

export const {
  setCaseStudies,
  addCaseStudy,
  updateCaseStudy,
  deleteCaseStudy,
} = caseStudySlice.actions;
export default caseStudySlice.reducer;
