import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("fetchNews", async () => {
  const response = await fetch(
    `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`
  );

  const result = await response.json();

  return result;
});

const newsSlicee = createSlice({
  name: "user",
  initialState: {
    loading: true,
    news: [],
    error: "",
  },

  extraReducers(builder) {
    //fetchNews
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.error = " ";
    });

    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

export default newsSlicee.reducer;
