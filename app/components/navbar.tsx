import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="wrapper flex content-center p-6">
            <div className="Logo mr-10">
                <Link href="/">XYZ Crypto</Link>
            </div>
            <div className="header flex gap-10">
                <Link href="#">Home</Link>
                <Link href="#">Crypto</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
