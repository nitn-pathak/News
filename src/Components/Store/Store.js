import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../../Features/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});
