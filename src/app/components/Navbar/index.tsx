"use client";
import { RouteButtons } from "./RouteButtons";

export function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between px-16 shadow-md items-center h-16 bg-white fixed">
        <div>Logo</div>
        <RouteButtons />
        <div>User</div>
      </div>
    </>

  )
}
