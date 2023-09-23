import "./App.css";
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <BookingProvider>
      <main>main content</main>
    </BookingProvider>
  );
}

export default App;
