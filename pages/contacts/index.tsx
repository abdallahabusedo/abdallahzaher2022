import React from "react";
import Contactme from "../../components/Contactme";
import Cursor from "../../components/Cursor";

function Contacts() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    window.innerWidth > 700 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <div>
      {isMobile ? <Cursor /> : null}
      <Contactme />
    </div>
  );
}

export default Contacts;
