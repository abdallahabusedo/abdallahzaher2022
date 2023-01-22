import React from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import p1m from "./../assets/p1m.png";
import github from "./../assets/square-github.svg";
import html from "./../assets/html.png";
import css from "./../assets/css3.png";
import vue from "./../assets/vuejs.png";
import firebase from "./../assets/firebase.png";
import NavBar from "./NavBar";

function ProjectsSlide() {
  const Projects = [
    {
      name: "Posidoon Chat",
      description:
        "Posidoon-Chat is a simple room with messaging functionality built with VueJs and the back-end is Firebase, to enhance my skills in VueJs and Firebase.",
      image: p1m,
      link: "https://github.com/abdallahabusedo/chat-firebase",
      badges: [
        {
          name: "HTML",
          icon: html,
        },
        {
          name: "CSS",
          icon: css,
        },
        {
          name: "VueJs",
          icon: vue,
        },
        {
          name: "Firebase",
          icon: firebase,
        },
      ],
    },
    {
      name: "Posidoon Chat",
      description:
        "Posidoon-Chat is a simple room with messaging functionality built with VueJs and the back-end is Firebase, to enhance my skills in VueJs and Firebase,",
      image: p1m,
      badges: [],
    },
  ];
  return (
    <section
      className={`${styles.Welcome} flex flex-col gap-8 justify-center items-center p-4`}
    >
      <NavBar />
      <span className={`${styles.text}`}>
        {"{"} .Projects {"}"}
      </span>
      <div
        className={`${styles.glassEffect} rounded-[10px] flex justify-items-center justify-center gap-4 items-center w-2/3 bg-[#290e56]`}
      >
        <Splide>
          {Projects.map((project, i) => {
            return (
              <SplideSlide key={i}>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={project.image}
                    alt=""
                    width={600}
                    className="rounded-xl"
                  />
                  <div>
                    <h2
                      className={`${styles.projectName} hover:underline transition-all duration-200 ease-in-out`}
                    >
                      <a href={project.link}>{project.name}</a>
                    </h2>
                    <div className="flex gap-2 justify-center items-center text-white rounded-full ">
                      {project.badges.map((bad, y) => {
                        return (
                          <span
                            key={y}
                            className={`${styles.glassEffect}  rounded-full  flex justify-center items-center px-2 gap-2 hover:bg-[#f8f8f823] transition-all duration-200 ease-in-out `}
                          >
                            <Image
                              src={bad.icon}
                              alt={bad.name}
                              className="w-[1.3rem] py-[0.25rem]"
                            />
                            {bad.name}
                          </span>
                        );
                      })}
                    </div>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
}

export default ProjectsSlide;
