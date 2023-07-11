import React from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themeToggle}>
      <WiMoonAltWaningCrescent4 size={27} />
    </div>
  );
};

export default ThemeToggle;
