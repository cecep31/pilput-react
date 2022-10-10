import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex">
        <Link className="bg-purple-400 hover:bg-purple-500 hover:text-white px-2 rounded-sm" to={"/"}>Home</Link>
        <Link className="bg-green-400 hover:bg-green-500 hover:text-white px-2 rounded-sm ml-3" to={"/about"}>About</Link>
        <Link className="bg-blue-400 hover:bg-blue-500 hover:text-white px-2 rounded-sm ml-3" to={"/contact"}>Contact</Link>
      </div>
    </>
  );
}
