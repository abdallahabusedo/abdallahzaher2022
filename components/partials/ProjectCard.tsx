import React from "react";
import styles from "./../../styles/Home.module.css";
import Image from "next/image";

const ProjectCard = ({ project, i }: any) => {
  return (
    <div
      // data-aos={project.animation}
      key={i}
      className={`${styles.glassEffect} rounded-[10px] flex flex-col text-center justify-center items-center bg-[#290e56] w-2/3 p-8 `}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src={project.image}
          alt=""
          className="rounded-xl lg:w-[500px] md:w-[400px] sm:w-[300px] xs:w-[200px]"
        />
        <div className="flex flex-col justify-center items-center">
          <h2
            className={`text-white font-bold py-2 underline hover:underline transition-all duration-200 ease-in-out`}
          >
            <a href={project.link} className="flex justify-center gap-4">
              {project.name}
            </a>
          </h2>
          <div
            className={`grid ${
              project.badges.length === 1
                ? "lg:grid-cols-1"
                : project.badges.length === 2
                ? "lg:grid-cols-2"
                : project.badges.length === 3
                ? "lg:grid-cols-3"
                : "lg:grid-cols-4"
            }  gap-2 justify-center items-center text-white rounded-full  md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2`}
          >
            {project.badges.map((bad: any, y: number) => {
              return (
                <span
                  key={y}
                  className={`${styles.glassEffect} rounded-full  flex justify-center items-center px-2 gap-2 hover:bg-[#f8f8f823] transition-all duration-200 ease-in-out `}
                >
                  <Image
                    src={bad.icon}
                    alt={bad.name}
                    className="w-[1.3rem] py-[0.25rem]"
                  />
                  <div>
                    <p className="text-[8px]">{bad.name} </p>
                  </div>
                </span>
              );
            })}
          </div>
          <p className="text-white lg:text-[18px] md:text-[18px] sm:text-[12px] xs:text-[12px] text-left py-4 border-t-2 mt-4">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
