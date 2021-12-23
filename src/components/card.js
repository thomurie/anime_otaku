import { AspectRatio, Badge, Box, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Card = ({ info }) => {
  const title = info.attributes.canonicalTitle;
  const title_en = info.attributes.titles.en || info.attributes.titles.en_jp;
  const title_ja = info.attributes.titles.ja_jp;
  const img = info.attributes.posterImage.small;
  const status = info.attributes.status;
  const episodes = info.attributes.episodeCount;
  const rating = parseInt(info.attributes.averageRating) / 20 || false;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image src={img} alt={title} objectFit="cover" />
      </AspectRatio>

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {title_ja} | {title_en}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {title}
        </Box>
        <Box>
          {episodes}
          <Box as="span" color="gray.600" fontSize="sm">
            {episodes ? ` episodes ` : `On Going `}
            {status !== "finished" ? (
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New Episodes
              </Badge>
            ) : null}
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {rating ? (
            <>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < Math.floor(rating) ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {rating} Stars
              </Box>{" "}
            </>
          ) : (
            <>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon key={i} color="gray.300" />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {rating} No Reviews
              </Box>{" "}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
