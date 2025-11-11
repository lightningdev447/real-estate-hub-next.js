"use client";
import { createContext, useContext, useState } from "react";

// Create a context
const GlobalContext = createContext();

//Create a provider
export function GlobalProvider({ children }) {
  const [unReadCount, setUnReadCount] = useState(0);
  return (
    <GlobalContext.Provider value={{ unReadCount, setUnReadCount }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access context
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
