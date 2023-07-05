"use client";
import { Account } from "./Account";
import { RouteButtons } from "./RouteButtons";

export function Navbar() {
  return (
    <>
      <div className="w-full grid grid-cols-12 px-12 shadow-md items-center h-16 bg-white fixed">
        <div className="col-span-3">Logo</div>
        <RouteButtons />
        <Account />
      </div>
    </>

  )
}
