import React from "react";

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
      </section>
    </>
  );
};

export default Home;
