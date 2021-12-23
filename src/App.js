import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTrending } from "./features/anime/animeSlice";
import Navagation from "./components/routes";

function App() {
  const dispatch = useDispatch();
  const listStatus = useSelector((state) => state.anime.status);

  useEffect(() => {
    if (listStatus === "idle") {
      dispatch(fetchTrending());
    }
  }, [listStatus, dispatch]);

  return (
    <div className="App">
      <Navagation />
    </div>
  );
}

export default App;

/**
 * The Anime List App
 *
 * API Docs = https://kitsu.docs.apiary.io/#introduction/json:api/pagination
 *
 * Frontend / Components library = https://chakra-ui.com/docs/feedback/skeleton
 *
 * Redux
 * React Router 6
 *
 * TODO
 * Pages for the cards
 * User login (using API)
 * User profile page
 * CRUD Anime
 *
 */
