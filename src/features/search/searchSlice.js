import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchedAnime } from "../anime/api";

const initialState = {
  anime: [],
  status: "idle",
  error: null,
};

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (query) => {
    if (!query) return [];
    const response = await getSearchedAnime(query);
    return response.data.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSearch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.anime = [...action.payload];
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateSearch } = searchSlice.actions;
// referres to Redux state
export const selectAllSearched = (state) => state.search.anime;

export default searchSlice.reducer;
