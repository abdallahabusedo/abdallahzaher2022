import Image from "next/image";
import React from "react";
import styles from "./../styles/Home.module.css";
import html from "./../assets/html.png";
import css from "./../assets/css3.png";
import js from "./../assets/javascript-logo.png";
import react from "./../assets/react.png";
import vue from "./../assets/vuejs.png";
import bootstrap from "./../assets/bootstrap-framework-logo.png";
import python from "./../assets/python-language-logo.png";
import cpp from "./../assets/c-language-logo.png";
import next from "./../assets/Next.js.png";
import cc from "./../assets/cdnlogo.com_c-sharp.png";
import jest from "./../assets/jest.png";
import git from "./../assets/pngwing.com.png";

function Skills() {
  let skills = [
    {
      name: "HTML5",
      icon: <Image src={html} alt="HTML5" className="max-w-[80px]" />,
    },
    {
      name: "CSS",
      icon: <Image src={css} alt="CSS" className="max-w-[80px]" />,
    },
    {
      name: "JavaScript",
      icon: <Image src={js} alt="JavaScript" className="max-w-[80px]" />,
    },
    {
      name: "React",
      icon: <Image src={react} alt="React" className="max-w-[80px]" />,
    },
    {
      name: "Vue",
      icon: <Image src={vue} alt="Vue" className="max-w-[80px]" />,
    },
    {
      name: "Bootstrap",
      icon: <Image src={bootstrap} alt="Bootstrap" className="max-w-[80px]" />,
    },
    {
      name: "Jest",
      icon: <Image src={jest} alt="Jest" className="max-w-[80px]" />,
    },
    {
      name: "Python",
      icon: <Image src={python} alt="Python" className="max-w-[80px]" />,
    },
    {
      name: "C++",
      icon: <Image src={cpp} alt="C++" className="max-w-[80px]" />,
    },
    {
      name: "C#",
      icon: <Image src={cc} alt="C#" className="max-w-[80px]" />,
    },
    {
      name: "Next",
      icon: <Image src={next} alt="Next" className="max-w-[80px]" />,
    },
    {
      name: "Git",
      icon: <Image src={git} alt="git" className="max-w-[80px]" />,
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
        className={`${styles.glassEffect} grid grid-cols-6 justify-items-center justify-center gap-4 items-center w-2/3 bg-[#290e56] p-4`}
      >
        {skills.map((sk) => {
          return (
            <div
              className={`flex flex-col gap-2 justify-center items-center max-w-[150px] min-w-[150px] min-h-[150px] hover:bg-[#290e56] rounded-full transition-all duration-1000 ease-in-out group`}
            >
              <span className="group-hover:-rotate-[30deg] transition-all duration-1000 ease-in-out">
                {sk.icon}
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
