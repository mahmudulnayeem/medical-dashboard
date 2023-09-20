import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "~/app/api/auth/[...nextauth]/options";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);
  //@ts-ignore
  if (session?.user?.role !== "admin") {
    redirect("/");
  }
  return (
    <html>
      <body>
        <p>Admin layout</p>
        {children}
      </body>
    </html>
  );
};

export default Layout;
