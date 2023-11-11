import { createContext, useContext, useReducer } from "react";

const BookingContext = createContext(undefined);

const initializeTimes = () => {
  return {
    availableTimes: [
      {
        value: "9:00",
        title: "9 AM",
      },
      {
        value: "12:00",
        title: "12 PM",
      },
      {
        value: "15:00",
        title: "3 PM",
      },
      {
        value: "18:00",
        title: "6 PM",
      },
    ],
  };
};

const updateTimes = (state) => {
  return initializeTimes();
};

export const BookingProvider = ({ children }) => {
  const [availableTimes, useAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <BookingContext.Provider value={{ availableTimes, useAvailableTimes }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
