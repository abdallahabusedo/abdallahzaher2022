import React from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import YoutubeCard from "./partials/YoutubeCard";

const YoutubeSection = () => {
  const text =
    "xl:text-[200%] lg:text-[150%] md:text-[20px] sm:text-[20px] xs:text-[15px] mb-4";
  return (
    <div
      id="youtube"
      className={`${styles.Welcome} flex flex-col items-center`}
    >
      <span className={`${styles.text}`}>
        {"{"} .My Youtube {"}"}
      </span>

      <div className="flex justify-between items-center gap-32 md:gap-16 sm:gap-8 xs:gap-8 mx-12">
        <div>
          <p className={` text-white ${text} `}>
            I have a Youtube channel Called
          </p>
          <p
            className={`text-[#8e7941] ${text}  underline-offset-8 hover:underline cursor-pointer decoration-none `}
            onClick={() =>
              window.location.replace(
                "https://www.youtube.com/@CodewithPosidoon/videos"
              )
            }
          >
            Code with Posidoon
          </p>
          <p className={` text-white ${text} `}>
            Explaining Three js Library in Arabic
          </p>
        </div>
        <div>
          <Image
            onClick={() =>
              window.location.replace(
                "https://www.youtube.com/@CodewithPosidoon/videos"
              )
            }
            src={"/yy.gif"}
            width={300}
            height={300}
            alt="yy"
            className="rounded-full cursor-pointer grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 ease-in-out object-cover"
          />
        </div>
      </div>
      <p
        className={`text-[#8e7941] ${text} mt-4 underline-offset-8 hover:underline cursor-pointer decoration-none `}
      >
        Here Some of My Youtube Videos
      </p>
      <div className="mx-12 mb-8">
        <YoutubeCard />
      </div>
    </div>
  );
};

export default YoutubeSection;
