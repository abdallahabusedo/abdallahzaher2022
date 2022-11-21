import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdWorkspacesFilled, MdContacts } from "react-icons/md";
function NavBar() {
  let taps = [
    {
      name: "Home",
      link: "#",
      icon: <AiFillHome />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <MdWorkspacesFilled />,
    },
    {
      name: "Projects",
      link: "#",
      icon: <AiFillProject />,
    },
    {
      name: "Contact me",
      link: "#",
      icon: <MdContacts />,
    },
  ];
  return (
    <div className="bg-transparent text-white text-[24px] font-[verdana]">
      <div className="flex flex-row justify-center items-center">
        {taps.map((tap) => {
          return (
            <Link
              href={tap.link}
              className="flex flex-col justify-center items-center rounded-xl px-4 py-2"
            >
              {tap.icon}
              {tap.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
