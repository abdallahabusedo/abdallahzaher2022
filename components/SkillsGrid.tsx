import Image from "next/image";
import React from "react";
import styles from "./../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills } from "./../objects/SkillsArray";

function SkillsGrid() {
  React.useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out", delay: 100 });
  }, []);

  return (
    <div id="skills" className={`${styles.Welcome} flex flex-col items-center`}>
      <span className={`${styles.text}`}>
        {"{"} .Skills {"}"}
      </span>

      <div
        className={`${styles.glassEffect} 
         rounded-[10px]  
         grid lg:grid-cols-7 justify-items-center justify-center  items-center bg-[#290e56] lg:p-8
         md:grid-cols-5 md:gap-0 md:p-4
         sm:grid-cols-4 sm:gap-0 sm:p-4
         xs:grid-cols-4 xs:gap-0 xs:p-4 
         `}
      >
        {skills.map((sk, i) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={sk.delay}
              key={i}
              className={`flex flex-col justify-center items-center gap-2
              hover:bg-[#290e56] rounded-full transition-all duration-1000 ease-in-out group
              lg:max-w-[120px] lg:min-w-[120px] lg:min-h-[120px]
              md:max-w-[100px] md:min-w-[100px] md:min-h-[100px]
              sm:max-w-[80px] sm:min-w-[80px] sm:min-h-[80px]
              xs:max-w-[80px] xs:min-w-[80px] xs:min-h-[80px] 
               `}
            >
              <span className="group-hover:-rotate-[30deg] transition-all duration-1000 ease-in-out">
                <Image
                  src={sk.icon}
                  alt="express"
                  width={60}
                  className="
                  lg:max-w-[60px]
                  md:max-w-[50px]
                  sm:max-w-[30px]
                  xs:max-w-[30px]
                  "
                />
              </span>
              <span
                className="font-bold text-[#f5f5f5] 
                lg:text-[12px]  
                md:text-[12px] 
                sm:text-[12px] 
                xs:text-[8px] 
                "
              >
                {sk.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsGrid;
