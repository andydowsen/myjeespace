import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-row  text-center items-center justify-center ">
      <Link href="/student/questionbattleground">
        Your questions battleground
      </Link>
    </div>
  );
};

export default page;
