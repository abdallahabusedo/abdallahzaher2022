import "@splidejs/react-splide/css/sea-green";
import "aos/dist/aos.css";
import React from "react";
import styles from "./../styles/Home.module.css";
import { ProjectsArray } from "././../objects/ProjectsArray";
import CarouselComp from "./partials/Carousel";
import ProjectCard from "./partials/ProjectCard";
function ProjectsSlide() {
  const [cards, setCards] = React.useState<any>([]);
  React.useEffect(() => {
    let temp = ProjectsArray.map((project: any, i: number) => {
      return { key: i, content: <ProjectCard project={project} i={i} /> };
    });
    setCards((prev: any) => temp);
  }, []);
  return (
    <div
      id="projects"
      className={`${styles.Welcome} flex flex-col gap-10 justify-center items-center`}
    >
      <span className={`${styles.text} lg:mt-40 md:mt-30 sm:mt-20 xs:mt-20`}>
        {"{"} .Projects {"}"}
      </span>
      {/* <div className="w-full my-10 h-full"> */}
      <CarouselComp
        cards={cards}
        height="500px"
        width="180%"
        offset={2}
        showArrows={false}
      />
      {/* </div> */}
    </div>
  );
}

export default ProjectsSlide;
