import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { MdWorkspacesFilled, MdContacts } from "react-icons/md";
import { TfiViewList } from "react-icons/tfi";
function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(true);
  const ToggleOpen = () => setIsOpen(!isOpen);
  let taps = [
    {
      name: "About me",
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
      link: "#projects",
      icon: <AiFillProject />,
    },
    {
      name: "Contact Me",
      link: "#contacts",
      icon: <MdContacts />,
    },
  ];
  return (
    <div
      className="bg-transparent text-white font-[verdana] absolute w-full top-0 flex justify-center items-center 
    lg:text-[24px]  
    md:text-[18px] 
    sm:text-[12px] 
    xs:text-[12px] 
    "
    >
      <div className="flex flex-row justify-center items-center  w-full lg:gap-8 md:gap-4 sm:gap-4 xs:gap-4">
        {isOpen ? (
          <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
            <div className="absolute w-full h-full top-0 left-0 overflow-hidden opacity-40 blur-sm scale-110">
              <img
                className="absolute w-full h-full object-cover top-0 left-0 transition-all duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] scale-125 clip-path-main active:clip-path-active active:scale-100"
                id="1-bg__img"
                src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="1"
              />
              <img
                className="absolute w-full h-full object-cover top-0 left-0 transition-all duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] scale-125 clip-path-main active:clip-path-active active:scale-100"
                id="2-bg__img"
                src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="2"
              />
              <img
                className="absolute w-full h-full object-cover top-0 left-0 transition-all duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] scale-125 clip-path-main active:clip-path-active active:scale-100"
                id="3-bg__img"
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="3"
              />
              <img
                className="absolute w-full h-full object-cover top-0 left-0 transition-all duration-1000 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] scale-125 clip-path-main active:clip-path-active active:scale-100"
                id="4-bg__img"
                src="https://images.pexels.com/photos/346734/pexels-photo-346734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="4"
              />
            </div>

            <ul className=" flex flex-col justify-center w-[100%]">
              <li
                className="relative list-none mt-[60px] before:absolute before:content-[``] before:w-[60px] 
                before:h-[60px] before:top-1/2 before:left-0 before:translate-x-[-80px] 
                before:translate-y-[-50%] before:rotate-[225deg] before:opacity-0 
                before:will-change-transform before:duration-700 
                before:ease-[cubic-bezier(0.95,0.05,0.795,0.035)] 
                group hover:before:translate-x-0 hover:before:translate-y-[-50%] hover:before:rotate-180
                "
                data-id="1"
              >
                <a
                  href="#"
                  className="group-hover:translate-x-[80px] border-white  relative block uppercase no-underline text-[75px] decoration-none z-20 duration-700 ease-[cubic-bezier(0.95,0.05,0.795,0.035)]"
                >
                  Home
                </a>
              </li>
              <li
                className="relative list-none  before:absolute before:content-[``] before:w-[60px] before:h-[60px] before:top-1/2 before:left-0 before:translate-x-[-80px] before:translate-y-[-50%] before:rotate-[225deg] before:opacity-0 before:will-change-transform before:duration-700 before:ease-[cubic-bezier(0.95,0.05,0.795,0.035)] "
                data-id="2"
              >
                <a href="#" className="relative block uppercase no-underline">
                  Skills
                </a>
              </li>
              <li
                className="relative list-none before:absolute before:content-[``] before:w-[60px] before:h-[60px] before:top-1/2 before:left-0 before:translate-x-[-80px] before:translate-y-[-50%] before:rotate-[225deg] before:opacity-0 before:will-change-transform before:duration-700 before:ease-[cubic-bezier(0.95,0.05,0.795,0.035)] "
                data-id="3"
              >
                <a href="#" className="relative block uppercase no-underline ">
                  Projects
                </a>
              </li>
              <li
                className="relative list-none  before:absolute before:content-[``] before:w-[60px] before:h-[60px] before:top-1/2 before:left-0 before:translate-x-[-80px] before:translate-y-[-50%] before:rotate-[225deg] before:opacity-0 before:will-change-transform before:duration-700 before:ease-[cubic-bezier(0.95,0.05,0.795,0.035)] "
                data-id="4"
              >
                <a href="#" className="relative block uppercase no-underline ">
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>closed</div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
