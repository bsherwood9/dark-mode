import React from "react";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);
  const toggleMode = () => {
    setStoredValue(!storedValue);
  };
  return [storedValue, setStoredValue, toggleMode];
};

export default useDarkMode;
