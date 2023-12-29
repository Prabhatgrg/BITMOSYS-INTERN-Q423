import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../public/menu.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="wrapper flex justify-between items-center z-50 p-4 bg-navbar shadow-md shadow-white">
        <div className="container mx-auto Logo">
          <Link href="/">CryptoHub</Link>
        </div>
        <div className="header hidden md:flex gap-2 md:gap-10">
          <Link href="/" className="hover:bg-[#1E2026] rounded-xl p-4">
            Home
          </Link>
          <Link href="/cryptos" className="hover:bg-[#1E2026] rounded-xl p-4">
            Crypto
          </Link>
        </div>
        <div className="md:hidden">
          <div onClick={toggleMobileMenu} className="text-white cursor-pointer">
            <Image src={Menu} alt="Menu Icon" width={50} height={50} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu bg-navbar p-4">
          <Link
            href="/"
            className="block text-white py-2 hover:bg-[#1E2026]"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/cryptos"
            className="block text-white py-2 hover:bg-[#1E2026]"
            onClick={toggleMobileMenu}
          >
            Crypto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
