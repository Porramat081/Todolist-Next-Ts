"use client";

import { useEffect, useState } from "react";

export default function ToggleModeSwitch() {
  const [isLight, setIsLight] = useState(false);

  function setLightMode() {
    setIsLight(true);
    localStorage.setItem("theme-todo", "light");
    document.querySelector("html")?.setAttribute("data-theme", "light");
  }

  function setDarkMode() {
    setIsLight(false);
    localStorage.setItem("theme-todo", "dark");
    document.querySelector("html")?.setAttribute("data-theme", "dark");
  }

  useEffect(() => {
    const themeStorage = localStorage.getItem("theme-todo");
    if (themeStorage === "light") {
      setIsLight(true);
      document.querySelector("html")?.setAttribute("data-theme", "light");
    } else {
      setIsLight(false);
      document.querySelector("html")?.setAttribute("data-theme", "dark");
    }
  }, []);

  return (
    <div className="flex py-1 px-2 gap-4 bg-slate-400 rounded-2xl relative">
      <button className="" onClick={setLightMode}>
        <i className="fa-solid fa-sun" aria-hidden="true"></i>
      </button>
      <button className="" onClick={setDarkMode}>
        <i className="fa-solid fa-moon" aria-hidden="true"></i>
      </button>
      <div
        className={`absolute top-0 ${
          isLight ? "left-0" : "right-0"
        } rounded-full h-full aspect-square ${
          isLight ? "bg-gray-800" : "bg-gray-50"
        } transition-all`}
      ></div>
    </div>
  );
}
