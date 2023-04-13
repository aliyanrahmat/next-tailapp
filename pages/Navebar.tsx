import React from 'react';
import Link from "next/link";

function Navebar(): JSX.Element {
  return (
    <div>
    <div className="flex justify-between p-5 pointer-events-auto bg-green-800 text-white">
        <div className="capitalize font-bold text-2xl ">
          <h1 className="pointer">build</h1>
        </div>
        <ul className="flex justify-center gap-12 capitalize font-bold text-2xl">
        <li>
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
        </ul>
        <div className="">
          <input
            className="rounded-full p-1"
            type="text"
            placeholder="search here"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Navebar