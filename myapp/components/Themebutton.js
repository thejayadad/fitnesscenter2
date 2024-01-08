'use client'
import React, { useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "@/lib/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <button
      className={`w-16 h-8 rounded-full cursor-pointer flex items-center relative border ${
        theme === "dark" ? "border-gray-800 bg-gray-400" : "border-gray-300 bg-gray-100"
      } transition-all`}
      onClick={toggle}
    >
      <div
        className={`w-8 h-8 rounded-full transform transition-transform ${
          theme === "dark" ? "translate-x-0" : "translate-x-8"
        } bg-gray-500`}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {theme === "dark" ? <FiMoon size={20} color="#0f172a" /> : <FiSun size={20} color="#fcd34d" />}
      </div>
    </button>
  );
};

export default ThemeToggle;
