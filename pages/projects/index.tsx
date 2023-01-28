import React from "react";
import Cursor from "../../components/Cursor";
import ProjectsSlide from "../../components/ProjectsSlide";

function Projects() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    window.innerWidth > 700 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <div>
      {isMobile ? <Cursor /> : null}
      <ProjectsSlide />
    </div>
  );
}

export default Projects;
