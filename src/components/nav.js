import { Link } from "react-router-dom";
import {
  Button,
  Flex,
  Box,
  IconButton,
  Heading,
  Spacer,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Box p="4">
        <Heading>Anime List</Heading>
      </Box>
      <Spacer />
      <Box p="4">
        <IconButton
          onClick={toggleColorMode}
          aria-label="Search database"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Box>
    </Flex>
  );
};

export default Nav;
