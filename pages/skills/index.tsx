import React from "react";
import Cursor from "../../components/Cursor";
import SkillsGrid from "../../components/SkillsGrid";

function Skills() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    window.innerWidth > 700 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <div>
      {isMobile ? <Cursor /> : <></>}
      <SkillsGrid />
    </div>
  );
}

export default Skills;
