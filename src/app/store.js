import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import animeReducer from "../features/anime/animeSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore(
  {
    reducer: {
      posts: postsReducer,
      anime: animeReducer,
      search: searchReducer,
    },
  },
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
