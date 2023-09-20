"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const SignOutBtn = () => {
  const { data: session } = useSession();

  return (
    <>
      {!!session ? (
        <button
          className="bg-red-500 text-white px-3 py-2 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      ) : (
        <Link
          href="/api/auth/signin"
          className="bg-red-500 text-white px-3 py-2 rounded-md"
        >
          Sign in
        </Link>
      )}
    </>
  );
};

export default SignOutBtn;
