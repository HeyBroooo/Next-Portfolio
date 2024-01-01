import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="mt-24 mb-24">
      <div className="mx-auto max-w-2xl py-16 text-center sm:py-20 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          <span className="block">testing your code</span>
          <span className="block">Give your repo to us</span>
        </h2>
        <p className="mt-4 text-lg leading-6">
          Submit your code with us to know more about the performance and the
          stability of your code with use let's grow together
        </p>
        <Link href="/">
        <button className="mt-8 bg-white text-black items-center justify-center rounded-md border border-gray-800 w-full px-5 py-3">Get Start</button>
        </Link>
      </div>
    </div>
  );
}
