import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex">
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/about"}>About</Link>
        </div>
        <div>Contact</div>
      </div>
    </>
  );
}
