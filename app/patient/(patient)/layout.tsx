import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";
import { options } from "~/app/api/auth/[...nextauth]/options";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { GoHistory, GoReport } from "react-icons/go";
import { BiHistory } from "react-icons/bi";

const PatientLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(options);
  //@ts-ignore
  if (session?.user?.role !== "patient") {
    redirect("/");
  }

  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col  ">
      {children}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-mix  text-white">
        {/* Sidebar content here */}
        {/* logo */}
        <Image width={220} className="rounded-lg" src={logo} alt="Doctor" ></Image>
        <br />
        <li className="font-medium border-2 border-white text-white text-lg rounded-md my-2"><Link href={'/patient/appointments'} ><GoReport />
          Appointments</Link></li>
        <li className="font-medium border-2 border-white text-white text-lg rounded-md my-2"><Link href={'/patient/appointmentHistory'} ><GoHistory />
          Appointment History</Link></li>
        <li className="font-medium border-2 border-white text-white text-lg rounded-md my-2"><Link href={'/patient/testReport'} ><BiHistory />
          Test Report</Link></li>
      </ul>
    </div>
  </div>
  );
};

export default PatientLayout;
