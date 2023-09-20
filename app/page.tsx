import Link from "next/link";
import SignOutBtn from "./signoutbtn";

export default async function Home() {
  return (
    <>
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
      <div>
        <h1 className="text-3xl text-center">Welcome to the Hospital</h1>
        <p className="text-center">Please select your role</p>
      </div>
      <div className="text-center">
        <p> when login as admin, you can see the admin page</p>
        <p>when login as doctor, you can see the doctor page</p>
        <p>when login as patient, you can see the patient page</p>
        <p>when login as pathology, you can see the pathology page</p>
      </div>
      <div className="text-red-400 text-center">
        <p>username : doctor</p>
        <p>password : doctor</p>
        <p>To login as doctor</p>
      </div>
      <div className="text-teal-400 text-center">
        <p>username : admin</p>
        <p>password : admin</p>
        <p>To login as admin</p>
      </div>
      <div className="text-yellow-400 text-center">
        <p>username : pathology</p>
        <p>password : pathology</p>
        <p>To login as pathology</p>
      </div>
      <div className="text-blue-400 text-center">
        <p>username : patient</p>
        <p>password : patient</p>
        <p>To login as patient</p>
      </div>
      <div className="text-center">
        This page is public, anyone can see this page. we will style this page
        later.
      </div>
    </>
  );
}
