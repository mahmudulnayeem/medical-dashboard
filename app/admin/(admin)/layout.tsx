import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "~/app/api/auth/[...nextauth]/options";
import navLinks from "./nvalinks";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);
  //@ts-ignore
  if (session?.user?.role !== "admin") {
    redirect("/");
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  ">
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-mix  text-white">
          {/* Sidebar content here */}
          {/* logo */}
          <Link href="/">
            <Image
              width={220}
              className="rounded-lg"
              src={"/images/logo.png"}
              height={100}
              alt="Doctor"
            />
          </Link>
          <br />
          {navLinks.map((link) => (
            <li
              key={link.link}
              className="font-medium border-2 border-white text-white text-lg rounded-md my-2"
            >
              <Link href={`/admin/${link.link}`}>
                <link.icon className="inline-block mr-2" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Layout;
