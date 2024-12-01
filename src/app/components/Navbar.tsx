import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div>
        <Link href="/" className="font-bold text-xl text-blue-600">
          Mykyta
        </Link>
      </div>
      {/* CENTRE */}
      <div className="hidden">
        <div className="">
          <Link href="/">Home</Link>
        </div>
      </div>
      {/* RIGHT */}
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
