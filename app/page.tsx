import Link from "next/link";
import SignOutBtn from "./signoutbtn";

export default async function Home() {
  return (
    <div className="flex justify-between px-5">
      <Link className="hover:text-blue-700 hover:underline" href="/admin">
        Admin
      </Link>
      <Link className="hover:text-blue-700 hover:underline" href="/doctor">
        Doctor
      </Link>
      <Link className="hover:text-blue-700 hover:underline" href="/patient">
        Patient
      </Link>
      <Link className="hover:text-blue-700 hover:underline" href="/pathology">
        Pathology
      </Link>
      <SignOutBtn />
    </div>
  );
}
