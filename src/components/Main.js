import { Routes, Route, useNavigate } from "react-router-dom";
import { BookingForm, Result, Header } from ".";

export default function Main() {
  const navigate = useNavigate();

  function submitForm() {
    navigate("/result");
  }

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/book" element={<BookingForm submitForm={submitForm} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </main>
  );
}
