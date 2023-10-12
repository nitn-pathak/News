import { configureStore } from "@reduxjs/toolkit";
import newsSlicee from "../../Features/newsSlicee";

export const store = configureStore({
  reducer: {
    
    newss:newsSlicee
  },
});
