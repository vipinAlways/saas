import { SessionProvider } from "next-auth/react";
import React from "react";
import Nav from "~/components/Nav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <main className="w-full">
        <Nav />

        {children}
      </main>
    </SessionProvider>
  );
};

export default layout;
