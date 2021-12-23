import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearch, selectAllSearched } from "../search/searchSlice";
import {
  Box,
  Divider,
  Center,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Search2Icon, DeleteIcon } from "@chakra-ui/icons";
import Card from "../../components/card";
import LoadingCard from "../../components/loadingCard";

const SearchAnime = () => {
  const dispatch = useDispatch();
  const anime = useSelector(selectAllSearched);
  const [display, setDisplay] = useState("");
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length < 1) return dispatch(fetchSearch(false));
    setDisplay(search);
    setShow(true);
    return dispatch(fetchSearch(search));
  };

  const clearSearch = (e) => {
    e.preventDefault();
    setSearch("");
    setShow(false);
    setDisplay("");
    dispatch(fetchSearch(false));
  };

  return (
    <>
      <Box w="100%" p={4}>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={4}>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="text"
                placeholder="Ex: JoJo's"
                value={search}
                onChange={handleChange}
              />
            </InputGroup>

            <IconButton
              type="submit"
              aria-label="Search database"
              icon={<Search2Icon />}
            />
            <IconButton
              aria-label="Clear Search"
              icon={<DeleteIcon />}
              onClick={clearSearch}
            />
          </Stack>
        </form>
      </Box>
      {show ? (
        <>
          <Center h="100px">
            <Heading>Search Results for "{display}"</Heading>
          </Center>
          <SimpleGrid columns={[1, null, 3]} spacing="40px">
            {anime.length < 1
              ? Array(10).fill(<LoadingCard />)
              : anime.map((a) => <Card info={a} key={a.id} />)}
          </SimpleGrid>
        </>
      ) : null}
    </>
  );
};

export default SearchAnime;

{
  /* <Button
            type="submit"
            // leftIcon={<Search2Icon />}
            colorScheme="teal"
            variant="solid"
          >
            Search
          </Button>
          <Button
            type="reset"
            onClick={clearSearch}
            // rightIcon={<DeleteIcon />}
            colorScheme="teal"
            variant="outline"
          >
            Clear
          </Button> */
}
