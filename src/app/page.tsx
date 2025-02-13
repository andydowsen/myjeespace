"use client";

import RainingLetters from "@/components/RainingLetters";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

const Home = () => {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = React.useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  return (
    <div className="flex flex-col items-center relative justify-center h-screen">
      <div className="opacity-60 blur-sm w-full h-full ">
        <RainingLetters />
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Home;
