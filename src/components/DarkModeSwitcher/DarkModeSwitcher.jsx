import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import UseDarkTheme from "../Hooks/useDarkTheme";

function DarkModeSwitcher() {
  const [colorTheme, setTheme] = UseDarkTheme();
  const [darkMode, setDarkMode] = React.useState(
    colorTheme === "light" ? true : false
  );
  const darkModeToggler = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };
  return (
    <div className="fixed z-[1000] left-7 bottom-7 p-4 rounded-full bg-white shadow-shadowPrimaryFront dark:shadow-shadowDarkFront dark:bg-slate-600 text-gray-800 dark:text-white cursor-pointer">
      <DarkModeSwitch checked={darkMode} onChange={darkModeToggler} size={30} />
    </div>
  );
}

export default DarkModeSwitcher;
