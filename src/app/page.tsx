"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const Home = () => {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = React.useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if(!isClient) return null;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="my-4 dark:text-rose-500 text-blue-500">This is the text changing according to the theme {theme}</h1>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
