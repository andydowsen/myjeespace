"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = React.useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return "This is from server";
  }
  return <>This is from client </>;
}
