'use client'
import React, { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "@/lib/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-15 h-15 rounded-full cursor-pointer flex items-center justify-center relative ${
        theme === "dark" ? "bg-white" : "bg-gray-800"
      }`}
      onClick={toggle}
    >
      {theme === "dark" ? (
        <FiMoon size={14} color="#0f172a" />
      ) : (
        <FiSun size={14} color="white" />
      )}
      <div
        className={`w-15 h-15 rounded-full absolute ${
          theme === "dark" ? "left-1 bg-gray-800" : "right-1 bg-white"
        }`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
