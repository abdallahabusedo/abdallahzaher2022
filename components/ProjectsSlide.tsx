import React from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import "@splidejs/react-splide/css/sea-green";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectsArray } from "././../objects/ProjectsArray";

function ProjectsSlide() {
  const [next, setNext] = React.useState(6);
  React.useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out", debounceDelay: 50 });
  }, []);
  return (
    <div
      id="projects"
      className={`${styles.Welcome} flex flex-col justify-center items-center`}
    >
      <span className={`${styles.text} lg:mt-40 md:mt-30 sm:mt-20 xs:mt-20`}>
        {"{"} .Projects {"}"}
      </span>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4 sm:grid-cols-1 xs:grid-cols-1 justify-items-center mb-10 mx-12">
        {ProjectsArray.slice(0, next).map((project: any, i: number) => {
          return (
            <div
              data-aos={project.animation}
              key={i}
              className={`${styles.glassEffect} rounded-[10px] flex flex-col text-center justify-center items-center bg-[#290e56] w-full p-8  `}
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
                    <a
                      href={project.link}
                      className="flex justify-center gap-4"
                    >
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
                  <p className="text-white lg:text-[24px] md:text-[18px] sm:text-[12px] xs:text-[12px] text-left py-4 border-t-2 mt-4">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-8 mb-8">
        <div className={ProjectsArray.length === next ? "hidden" : ""}>
          <button
            className="text-white border p-4 rounded-md transition-all duration-400 ease-in-out hover:rounded-full hover:bg-white hover:text-black"
            onClick={() => setNext((prev: any) => prev + 2)}
          >
            Load More
          </button>
        </div>
        <div className={next < 7 ? "hidden" : ""}>
          <button
            className="text-white border p-4 rounded-md transition-all duration-400 ease-in-out hover:rounded-full hover:bg-white hover:text-black"
            onClick={() => setNext((prev: any) => prev - 2)}
          >
            Load Less
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProjectsSlide;
