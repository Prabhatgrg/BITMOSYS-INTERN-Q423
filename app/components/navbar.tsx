import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="wrapper flex content-center p-6 bg-navbar shadow-md shadow-white">
          <div className="Logo mr-10">
            <Link href="/">XYZ Crypto</Link>
          </div>
          <div className="header flex gap-10">
            <div className="home">
              <Link href="/" className="hover:bg-[#1E2026] rounded-xl p-6">
                Home
              </Link>
            </div>
            <div className="crypto">
              <Link
                href="/cryptos"
                className="hover:bg-[#1E2026] rounded-xl p-6"
              >
                Crypto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
