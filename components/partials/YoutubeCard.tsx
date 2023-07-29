import React from "react";
import styles from "./../../styles/Home.module.css";
import Image from "next/image";

const YoutubeCard = () => {
  const text =
    "xl:text-[200%] lg:text-[150%] md:text-[20px] sm:text-[15px] xs:text-[10px]";
  return (
    <div className="flex flex-col gap-8">
      <div
        className={`${styles.glassEffect} rounded-[10px] flex xl:flex-row lg:flex-row  md:flex-col sm:flex-col xs:flex-col justify-center gap-7 items-center text-center bg-[#290e56] p-8 `}
      >
        <Image
          onClick={() =>
            window.location.replace("https://youtu.be/d-DehcJ3gZ4")
          }
          src={"/2.png"}
          width={500}
          height={500}
          alt="2"
          className="rounded-md cursor-pointer w-[80%]"
        />
        <div>
          <p
            onClick={() =>
              window.location.replace("https://youtu.be/d-DehcJ3gZ4")
            }
            className={`${text} text-white cursor-pointer hover:text-[#8e7941] transition-all duration-200 ease-in-out hover:underline underline-offset-8`}
          >
            Load 3D Models using Three js
          </p>
          <p className="text-white text-center lg:text-[150%] md:text-[20px] sm:text-[15px] xs:text-[10px]">
            {"("}My Latest Video{")"}
          </p>
        </div>
      </div>
      <div
        className={`${styles.glassEffect} rounded-[10px] flex xl:flex-row lg:flex-row  md:flex-col-reverse sm:flex-col-reverse xs:flex-col-reverse justify-center gap-7 items-center text-center bg-[#290e56] p-8 `}
      >
        <div>
          <p
            onClick={() =>
              window.location.replace("https://youtu.be/d-DehcJ3gZ4")
            }
            className={`${text} text-white cursor-pointer hover:text-[#8e7941] transition-all duration-200 ease-in-out hover:underline underline-offset-8`}
          >
            Particles with Three js
          </p>
          <p className="text-white text-center">
            {"("}My Latest Video{")"}
          </p>
        </div>
        <Image
          onClick={() =>
            window.location.replace("https://youtu.be/cTY7_htjzV8")
          }
          src={"/1.png"}
          width={500}
          height={500}
          alt="1"
          className="rounded-md cursor-pointer w-[80%]"
        />
      </div>
    </div>
  );
};

export default YoutubeCard;
