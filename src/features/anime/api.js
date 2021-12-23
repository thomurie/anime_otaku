import axios from "axios";

const BASE_URL = "https://kitsu.io/api/edge/";

// Trending Anime
// https://kitsu.io/api/edge/trending/anime
const trendingAnime = `${BASE_URL}trending/anime`;

const getTrendingAnime = () => {
  try {
    return axios.get(trendingAnime);
  } catch (error) {
    console.error(error);
  }
};
// Search Anime
// anime?filter%5Btext%5D=Jujutsu%20Kaisen
// Spaces in search term must be filled with %20
const getSearchedAnime = (query) => {
  const cleanedQuery = query.split(" ").join("%20");
  try {
    return axios.get(`${BASE_URL}anime?filter%5Btext%5D=${cleanedQuery}`);
  } catch (error) {
    console.error(error);
  }
};
export { getTrendingAnime, getSearchedAnime };
