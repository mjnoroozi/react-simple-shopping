import { Link } from "react-router-dom";
import bannerImg from "../assets/imgs/banner.jpg";
import { VStack, Box, Text, Button, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <VStack padding={4} align="stretch" bg="yellow">
        <Box>
          <Heading as="h1" size="2xl">
            Book your table
          </Heading>
          <Text fontSize="2xl">
            Book your table online now and we will confirm your booking via
            e-mail.
          </Text>
          <Link to="/book">
            <Button colorScheme="yellow">Reserve a Table</Button>
          </Link>
        </Box>

        <div className="banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </VStack>
    </header>
  );
}
