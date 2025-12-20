"use client";

import Image from "next/image";
import React from "react";
import { Card } from "~/components/ui/card";
import { pricingCards } from "~/lib/constans";

const Home = () => {
  return (
    <>
      <section className="relative flex h-full w-full flex-col items-center justify-center pt-36">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-size-[4rem_4rem]"></div>
        <p className="text-center">Run your agency, in one place</p>
        <div className="from-primary to-secondary-foreground relative bg-linear-to-r bg-clip-text text-transparent">
          <h1 className="text-center text-9xl font-bold md:text-[300px]">
            Plura
          </h1>
        </div>

        <div className="relative flex items-center justify-center md:mt-[-90px]">
          <Image
            src={"/img.png"}
            alt="bannner img"
            height={1200}
            width={1200}
            className="border-muted rounded-tl-2xl rounded-tr-2xl border-2"
            loading="lazy"
            
          />
          <div className="top-[50% ] dark: from-background absolute right-0 bottom-0 left-0 z-10 bg-linear-to-t"></div>
        </div>
      </section>

      <section className="mt-20 flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-4xl">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straight forward pricing plans are tailored to meet your needs if{" "}
          {"you're"} not <br /> ready to commit you get started for free
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {pricingCards.map((card) => (
            <Card key={card.title}></Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
