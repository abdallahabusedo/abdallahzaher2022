import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdWorkspacesFilled, MdContacts } from "react-icons/md";
function NavBar() {
  let taps = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillHome />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <MdWorkspacesFilled />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <AiFillProject />,
    },
    {
      name: "Contact",
      link: "#",
      icon: <MdContacts />,
    },
  ];
  return (
    <div
      className="bg-transparent text-white font-[verdana] h-24 flex justify-center items-center 
    lg:text-[24px]  
    md:text-[18px] 
    sm:text-[12px] 
    xs:text-[12px] 
    "
    >
      <div className="flex flex-row justify-center items-center lg:gap-8 md:gap-4 sm:gap-4 xs:gap-4">
        {taps.map((tap, i) => {
          return (
            <Link
              key={i}
              href={tap.link}
              className="flex flex-col justify-center items-center rounded-xl"
            >
              .{tap.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
