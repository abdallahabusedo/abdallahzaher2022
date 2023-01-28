import Cursor from "../components/Cursor";
import WelcomeComp from "../components/WelcomeComp";
import ErrorBoundary from "../ErrorBoundary";
import React from "react";
export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    window.innerWidth > 700 ? setIsMobile(true) : setIsMobile(false);
  }, []);
  return (
    <ErrorBoundary>
      <div>
        {isMobile ? <Cursor /> : <></>}
        <WelcomeComp />
      </div>
    </ErrorBoundary>
  );
}
