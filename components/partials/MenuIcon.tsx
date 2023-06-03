import React from "react";

const MenuIcon = (props: any) => {
  let spanStyle = `bg-white rounded-[10px] h-[7px] md:h-[5px] sm:h-[5px] xs:h-[4px] mt-[7px] duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]`;
  return (
    <label
      htmlFor="check"
      className="flex flex-col w-16 md:w-14 sm:w-12 xs:w-10 cursor-pointer"
    >
      <input
        type="checkbox"
        id="check"
        className="hidden group-['checked'] cursor-pointer"
        checked={props.isOpen}
        onClick={() => props.toggleMenu()}
      />
      <span
        className={`${
          props.isOpen && "origin-bottom rotate-45 translate-x-[5px]"
        }  w-[50%] ${spanStyle}`}
      ></span>
      <span
        className={`${
          props.isOpen && "origin-top rotate-[-45deg] w-[100%] "
        }  w-[100%] ${spanStyle}`}
      ></span>
      <span
        className={`${
          props.isOpen &&
          "origin-bottom w-[50%] rotate-45 translate-x-[15px] translate-y-[-8px]"
        } w-[75%] ${spanStyle}`}
      ></span>
    </label>
  );
};

export default MenuIcon;
