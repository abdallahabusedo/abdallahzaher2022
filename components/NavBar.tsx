import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdWorkspacesFilled, MdContacts } from "react-icons/md";
function NavBar() {
  const router = useRouter();
  let taps = [
    {
      name: "About me",
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
      name: "Contact Me",
      link: "/contacts",
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
            <button
              key={i}
              className="hover:underline p-2"
              onClick={() => {
                router.push(tap.link);
              }}
            >
              .{tap.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
