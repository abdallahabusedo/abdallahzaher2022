import Image from "next/image";
import React from "react";
import styles from "./../styles/Home.module.css";
import html from "./../assets/html.png";
import css from "./../assets/css3.png";
import js from "./../assets/javascript-logo.png";
import ts from "./../assets/typescript.png";
import react from "./../assets/react.png";
import vue from "./../assets/vuejs.png";
import bootstrap from "./../assets/bootstrap-framework-logo.png";
import python from "./../assets/python-language-logo.png";
import cpp from "./../assets/c-language-logo.png";
import next from "./../assets/Next.js.png";
import cc from "./../assets/cdnlogo.com_c-sharp.png";
import jest from "./../assets/jest.png";
import git from "./../assets/pngwing.com.png";
import firebase from "./../assets/firebase.png";
import tailwind from "./../assets/tailwind-css.png";
import express from "./../assets/express.png";
import node from "./../assets/nodejs.png";
import graphql from "./../assets/graphql.png";
import NavBar from "./NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
function SkillsGrid() {
  React.useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out", delay: 100 });
  }, []);
  let skills = [
    {
      name: "HTML5",
      icon: html,
      delay: 100,
    },
    {
      name: "CSS",
      icon: css,
      delay: 200,
    },
    {
      name: "JavaScript",
      icon: js,
      delay: 300,
    },
    {
      name: "TypeScript",
      icon: ts,
      delay: 400,
    },
    {
      name: "React",
      icon: react,
      delay: 500,
    },
    {
      name: "Vue",
      icon: vue,
      delay: 600,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
      delay: 700,
    },
    {
      name: "Jest",
      icon: jest,
      delay: 800,
    },
    {
      name: "Python",
      icon: python,
      delay: 900,
    },
    {
      name: "C++",
      icon: cpp,
      delay: 1000,
    },
    {
      name: "C#",
      icon: cc,
      delay: 1100,
    },
    {
      name: "Next",
      icon: next,
      delay: 1200,
    },
    {
      name: "Git",
      icon: git,
      delay: 1300,
    },
    {
      name: "Firebase",
      icon: firebase,
      delay: 1400,
    },
    {
      name: "Tailwind",
      icon: tailwind,
      delay: 1500,
    },
    {
      name: "NodeJs",
      icon: node,
      delay: 1600,
    },
    {
      name: "Express",
      icon: express,
      delay: 1700,
    },
    {
      name: "GraphQl",
      icon: graphql,
      delay: 1800,
    },
  ];
  return (
    <section
      id="skills"
      className={`${styles.Welcome} flex flex-col items-center `}
    >
      <NavBar />
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
              className={`flex flex-col justify-center items-center
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
    </section>
  );
}

export default SkillsGrid;
