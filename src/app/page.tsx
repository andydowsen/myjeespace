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
          
    </div>
  );
};

export default Home;
