import AnimeList from "../features/anime/animeList";
import SearchAnime from "../features/search/search";
import { Container } from "@chakra-ui/react";
const Home = () => {
  return (
    <Container maxW="container.lg">
      <SearchAnime />
      <AnimeList />
    </Container>
  );
};

export default Home;
