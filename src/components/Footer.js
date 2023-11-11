import { VStack, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <VStack align="stretch">
        <Box>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist. We provide the best
            service.
          </p>
        </Box>

        <Box>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </Box>
        <Box>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> 123 Town Street, Chicago
            </li>
            <li>
              Phone: <br /> +00 123 456 789
            </li>
            <li>
              Email: <br /> little@lemon.com
            </li>
          </ul>
        </Box>
        <Box>
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
          </ul>
        </Box>
      </VStack>
    </footer>
  );
};

export default Footer;
