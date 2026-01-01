"use client";

import type { User } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { ThemeToggle } from "./ThemeToggel";

interface Props {
  user?: null | User;
}
const navLinks = [
  {
    name: "Pricing",
    href: "pricing",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Docs",
    href: "#",
  },
];

const Nav = ({ user }: Props) => {
  const { data } = useSession();
  return (
    <div className="relative flex items-center justify-between p-4">
      <aside className="flex items-center gap-2">
        logo{" "}
        {/* ////TODO: add image there <Image src={"/assest/plura-logo"} alt="logo" width={40} height={40} /> */}
        <span className="text-xl font-bold">Name</span>
      </aside>

      <nav className="absolute top-1/2 left-1/2 hidden -translate-1/2 md:block">
        <ul className="flex items-center justify-center gap-8">
          {navLinks.map(({ name, href }) => (
            <Link href={href} key={href + name} className="">{name}</Link>
          ))}
        </ul>
      </nav>

      <aside className="flex items-center gap-2">
        {data && data.user ? (
          <Button
            className="bg-primary hover:bg-primary/80 rounded-md p-2 px-4 text-white transition-all"
            onClick={async () => await signOut()}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="bg-primary hover:bg-primary/80 rounded-md p-2 px-4 text-white transition-all"
            onClick={async () =>
              await signIn("google", {
                callbackUrl: "/site",
              })
            }
          >
            Login
          </Button>
        )}

        <ThemeToggle />
      </aside>
    </div>
  );
};

export default Nav;
