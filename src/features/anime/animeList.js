import { useSelector } from "react-redux";
import { selectAllAnime } from "./animeSlice";
import { Center, Heading, SimpleGrid, Skeleton } from "@chakra-ui/react";
import Card from "../../components/card";
import LoadingCard from "../../components/loadingCard";

const AnimeList = () => {
  const anime = useSelector(selectAllAnime);

  console.log(anime);

  return (
    <>
      <Center h="100px">
        <Heading>Trending Anime</Heading>
      </Center>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {anime.length < 1
          ? Array(10).fill(<LoadingCard />)
          : anime.map((a) => <Card info={a} key={a.id} />)}
      </SimpleGrid>
    </>
  );
};

export default AnimeList;
