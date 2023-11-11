import "./App.css";
import { BookingProvider } from "./context/BookingContext";
import { Main, Footer } from "./components";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <BookingProvider>
          <Main />
          <Footer />
        </BookingProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
