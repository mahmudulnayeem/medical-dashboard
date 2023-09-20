import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "~/app/api/auth/[...nextauth]/options";
const DoctorLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);
  //@ts-ignore
  if (session?.user?.role !== "doctor") {
    redirect("/");
  }
  return (
    <html>
      <body>
        DoctorLayout
        {children}
      </body>
    </html>
  );
};

export default DoctorLayout;
