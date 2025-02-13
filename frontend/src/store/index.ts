import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import navbarReducer from "./slices/navbarSlice";
import labelReducer from "./slices/labelSlice";
import brandLogoReducer from "./slices/brandLogoSlice";
import serviceReducer from "./slices/serviceSlice";
import clientFeedbackReducer from "./slices/clientFeedbackSlice";
import caseStudyReducer from "./slices/caseStudySlice";
import portfolioReducer from "./slices/portfolioSlice";
import socialMediaReducer from "./slices/socialMediaSlice";
import categoryReducer from "./slices/categorySlice";
import  portfolioDetailsReducer  from "./slices/portfolioDetailsSlice";
import { navbarApi } from "@/api/navbarApi";
import { brandLogoApi } from "@/api/brandLogoApi";
import { labelApi } from "@/api/labelApi";
import { labelsReadApi } from "@/api/labelsReadApi";
import { clientFeedbackApi } from "@/api/clientFeedbackApi";
import { serviceApi } from "@/api/serviceApi";
import { caseStudyApi } from "@/api/caseStudyApi";
import { portfolioApi } from "@/api/portfolioApi";
import { socialMediaApi } from "@/api/socialMediaApi";
import { categoryApi } from "@/api/categoryApi";
import { portfolioDetailsApi } from "@/api/portfolioDetailsApi";
import { keyFeaturesApi } from "@/api/keyFeaturesApi";
import { technologyStackApi } from "@/api/technologyStackApi";
import { serviceDetailsApi } from "@/api/serviceDetailsApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    navbar: navbarReducer,
    label: labelReducer,
    brandLogo: brandLogoReducer,
    clientFeedback: clientFeedbackReducer,
    service: serviceReducer,
    caseStudy: caseStudyReducer,
    portfolio: portfolioReducer,
    socialMedia: socialMediaReducer,
    category: categoryReducer,
    portfolioDetails: portfolioDetailsReducer,
    [navbarApi.reducerPath]: navbarApi.reducer,
    [labelApi.reducerPath]: labelApi.reducer,
    [labelsReadApi.reducerPath]: labelsReadApi.reducer,
    [brandLogoApi.reducerPath]: brandLogoApi.reducer,
    [clientFeedbackApi.reducerPath]: clientFeedbackApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [caseStudyApi.reducerPath]: caseStudyApi.reducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
    [socialMediaApi.reducerPath]: socialMediaApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [portfolioDetailsApi.reducerPath]: portfolioDetailsApi.reducer,
    [keyFeaturesApi.reducerPath]: keyFeaturesApi.reducer,
    [technologyStackApi.reducerPath]: technologyStackApi.reducer,
    [serviceDetailsApi.reducerPath]: serviceDetailsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      navbarApi.middleware,
      labelApi.middleware,
      labelsReadApi.middleware,
      brandLogoApi.middleware,
      clientFeedbackApi.middleware,
      serviceApi.middleware,
      caseStudyApi.middleware,
      portfolioApi.middleware,
      socialMediaApi.middleware,
      categoryApi.middleware,
      portfolioDetailsApi.middleware,
      keyFeaturesApi.middleware,
      technologyStackApi.middleware,
      serviceDetailsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
