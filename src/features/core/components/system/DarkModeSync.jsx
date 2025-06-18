import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../slices/uiSlice";

const DarkModeSync = () => {
  const isDarkMode = useSelector(selectDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return null;
};

export default DarkModeSync;
