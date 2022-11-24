import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WelcomeComp from "../components/WelcomeComp";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <WelcomeComp />
      <Skills />
      <Projects />
    </div>
  );
}
