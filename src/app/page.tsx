import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-5xl">
      welcome to plura
      <Link href="/site">Jump to working page </Link>
    </div>
  );
};

export default Home;
