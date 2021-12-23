import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingAnime } from "./api";

const initialState = {
  anime: [],
  status: "idle",
  error: null,
};

export const fetchTrending = createAsyncThunk(
  "anime/fetchTrending",
  async () => {
    const response = await getTrendingAnime();
    return response.data.data;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTrending.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.anime = [...action.payload];
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// referres to Redux state
export const selectAllAnime = (state) => state.anime.anime;

export default animeSlice.reducer;
