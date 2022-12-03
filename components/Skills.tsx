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

function Skills() {
  let skills = [
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "TypeScript",
      icon: ts,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "Vue",
      icon: vue,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Jest",
      icon: jest,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: cc,
    },
    {
      name: "Next",
      icon: next,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "NodeJs",
      icon: node,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "GraphQl",
      icon: graphql,
    },
  ];
  return (
    <section
      id="skills"
      className={`${styles.Welcome} flex flex-col gap-8 justify-center items-center p-4`}
    >
      <span className={`${styles.text}`}>
        {"{"} Skills {"}"}
      </span>

      <div
        className={`${styles.glassEffect}  rounded-[10px]  grid grid-cols-7 justify-items-center justify-center gap-2 items-center w-2/3 bg-[#290e56] p-4`}
      >
        {skills.map((sk, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col gap-2 justify-center items-center max-w-[120px] min-w-[120px] min-h-[120px] hover:bg-[#290e56] rounded-full transition-all duration-1000 ease-in-out group`}
            >
              <span className="group-hover:-rotate-[30deg] transition-all duration-1000 ease-in-out">
                <Image
                  src={sk.icon}
                  alt="express"
                  className="max-w-[60px]"
                  loading="lazy"
                />
              </span>
              <span className="font-bold text-[#f5f5f5] ">{sk.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
