import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TiThListOutline } from "react-icons/ti";
import MenuIcon from "./partials/MenuIcon";
function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  React.useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  let taps = [
    {
      name: "About me",
      link: "#",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact Me",
      link: "#contacts",
    },
  ];

  React.useEffect(() => {
    const handleMouseEnter = (event: any) => {
      const id = event.currentTarget.dataset.id;
      document.getElementById(`${id}-bg__img`)?.classList.add("active");
    };

    const handleMouseLeave = () => {
      const menuImgs = document.querySelectorAll(".menu-img img");
      menuImgs.forEach((img) => img.classList.remove("active"));
    };

    const menuItems = document.querySelectorAll(".menu__item");
    menuItems.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div
      className="bg-transparent text-white font-[verdana] fixed z-30 w-full top-0 transition-all duration-500 ease-in-out
    lg:text-[24px]  
    md:text-[18px] 
    sm:text-[12px] 
    xs:text-[12px] 
    "
    >
      <div className="">
        <div className="flex justify-start w-full h-24 items-center fixed top-0 z-30">
          <div className="flex-1 px-10 py-5">
            <h1>Posidoon</h1>
          </div>
          <div className="px-10 py-5">
            <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
        {isOpen && (
          <div className="wrapp animate ease-in-out">
            <div className="menu-img">
              <img
                id="1-bg__img"
                src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="1"
              />
              <img
                id="2-bg__img"
                src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="2"
              />
              <img
                id="3-bg__img"
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="3"
              />
              <img
                id="4-bg__img"
                src="https://images.pexels.com/photos/346734/pexels-photo-346734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="4"
              />
            </div>

            <ul className="menu">
              {taps.map((tap: any, index: number) => {
                return (
                  <li
                    className="menu__item"
                    data-id={index + 1}
                    onClick={closeMenu}
                  >
                    <a href={tap.link} className="menu__link">
                      {tap.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
