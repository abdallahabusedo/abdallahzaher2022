import Image from "next/image";
import React from "react";
import cursor from "./../assets/Cursor.png";
import useMousePosition from "./useMousePosition";
import usePrefersReducedMotion from "./usePrefersReducedMotion";
function Cursor() {
  const mousePosition = useMousePosition();
  const prefersReducedMotion = usePrefersReducedMotion();

  const transform: any = prefersReducedMotion
    ? null
    : `translate(${mousePosition.x}px ,${mousePosition.y}px)`;

  return (
    <Image
      src={cursor}
      alt="Cursor"
      width={50}
      className="absolute z-10"
      style={{
        transform,
      }}
    />
  );
}

export default Cursor;
