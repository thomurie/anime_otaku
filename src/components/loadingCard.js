import { Skeleton } from "@chakra-ui/react";
import Card from "./card";

const LoadingCard = () => {
  const ldata = {
    attributes: {
      canonicalTitle: "",
      titles: {
        en: "",
        en_jp: "",
        ja_jp: "",
      },
      posterImage: { small: "" },
      status: "",
      episodeCount: 0,
      averageRating: null,
    },
  };
  return (
    <Skeleton>
      <Card info={ldata} />
    </Skeleton>
  );
};

export default LoadingCard;
