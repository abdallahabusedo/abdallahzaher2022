import React, { Suspense } from "react";
import styles from "../styles/Home.module.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./NavBar";
import Scene from "./Room";
import Loader from "./Loader";
function WelcomeComp() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out", debounceDelay: 50 });
    window.innerWidth > 700 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div className={`${styles.Welcome} h-[100vh] pt-28`}>
      <div className="fixed top-0 z-50 flex items-center justify-center w-full bg-white">
        New Website is under construction 🚧 the current one is 2022 version
      </div>

      <NavBar />
      <div
        data-aos="fade-up"
        className="flex h-[80vh]
      lg:flex-row lg:items-center lg:justify-center  
      md:flex-col md:justify-center md:items-center md:text-left
      sm:flex-col sm:justify-center sm:items-center 
      xs:flex-col xs:justify-center xs:items-center xs:text-center
      "
      >
        <div className="flex flex-col">
          <p
            className="text-white
          xl:text-[300%]
          lg:text-[250%] lg:ml-[70px]
          md:text-[30px] 
          sm:text-[30px] 
          xs:text-[25px]
          "
          >
            Hi, My name is
          </p>
          <p
            className="text-white text-center
           lg:text-[200%] lg:ml-[100px] 
          md:text-[30px] 
          sm:text-[30px] 
          xs:text-[25px]
          "
          >
            <span className="text-[#fb0691]">{"{"}</span> .Abdallah Zaher{" "}
            <span className="text-[#5d0cdfbe]">{"}"}</span>
          </p>
          <p
            className="text-white 
          lg:text-[20px] lg:ml-[70px] 
          md:text-[30px]  
          sm:text-[20px]
          xs:text-[15px]
          "
          >
            I am a <span className="text-[#fb0691]">{"< "}</span>Full-Stack
            developer<span className="text-[#5d0cdfbe]">{" >"}</span>
          </p>
          <div className="flex items-center justify-center mt-8">
            <button
              className="p-2 text-white transition-all duration-300 ease-in-out border hover:rounded-3xl w-fit"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1yL37a2MrCc5QozuHVblNiTWL51Nxbg_W/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Download My CV
            </button>
          </div>
        </div>
        <div
          className="
        lg:w-[50%] lg:h-[35rem] 
        md:w-[30rem] md:h-[30rem]
        sm:w-[30rem] sm:h-[30rem]
        xs:w-full xs:h-[30rem]
        "
        >
          <div className="flex items-center justify-center h-full ">
            <Suspense fallback={<Loader />}>
              <Canvas linear>
                <Scene />
                <OrbitControls enableZoom={isMobile ? false : true} />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeComp;
