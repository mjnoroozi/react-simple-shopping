import { createContext, useContext, useReducer } from "react";

const BookingContext = createContext(undefined);

const initializeTimes = () => {
  return {
    availableTimes: {},
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
