import { Routes, Route, useNavigate } from "react-router-dom";
import { BookingForm, Result, Landing } from ".";

export default function Main() {
  const navigate = useNavigate();

  function submitForm() {
    navigate("/result");
  }

  <main>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/book" element={<BookingForm submitForm={submitForm} />} />
      <Route path="/result" element={<Result to="/" />} />
    </Routes>
  </main>;
}
