import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "~/app/api/auth/[...nextauth]/options";
const pathologyLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);
  //@ts-ignore
  if (session?.user?.role !== "pathology") {
    redirect("/");
  }
  return (
    <html>
      <body>
        pathologyLayout
        {children}
      </body>
    </html>
  );
};

export default pathologyLayout;
