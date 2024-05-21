'use client';

import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext({
  range: '',
  setRange: () => {},
  resetRange: () => {},
});

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  function resetRange() {
    setRange(initialState);
  }

  const values = {
    range,
    setRange,
    resetRange,
  };

  return (
    <ReservationContext.Provider value={values}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined) throw new error('Context out of the range.');

  return context;
}

export { ReservationProvider, useReservation };
