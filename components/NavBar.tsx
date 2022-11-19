import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdWorkspacesFilled, MdContacts } from "react-icons/md";
function NavBar() {
  return (
    <div className="bg-transparent text-white text-[24px]">
      <div className="flex flex-row justify-center items-center">
        <Link
          href="#"
          className="flex flex-col justify-center items-center rounded-xl px-4 py-2"
        >
          <AiFillHome />
          Home
        </Link>
        <Link
          href="#"
          className="flex flex-col justify-center items-center rounded-xl px-4 py-2"
        >
          <MdWorkspacesFilled />
          Skills
        </Link>
        <Link
          href="#"
          className="flex flex-col justify-center items-center rounded-xl px-4 py-2"
        >
          <AiFillProject />
          Projects
        </Link>
        <Link
          href="#"
          className="flex flex-col justify-center items-center rounded-xl px-4 py-2"
        >
          <MdContacts />
          Contact me
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
