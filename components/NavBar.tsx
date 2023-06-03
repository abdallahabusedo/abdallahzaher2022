import React from "react";
import MenuIcon from "./partials/MenuIcon";
function NavBar() {
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
          <div className="px-10 py-5 ">
            <MenuIcon isOpen={isOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
        {isOpen && (
          <div className="wrapp animate ease-in-out">
            <ul className="menu">
              {taps.map((tap: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="menu__item"
                    data-id={index + 1}
                    onClick={closeMenu}
                  >
                    <a
                      href={tap.link}
                      className="menu__link  md:text-[58px] sm:text-[48px] xs:text-[30px]"
                    >
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
