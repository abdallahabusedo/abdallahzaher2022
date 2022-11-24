import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WelcomeComp from "../components/WelcomeComp";
import ErrorBoundary from "../ErrorBoundary";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <ErrorBoundary>
      <div>
        <WelcomeComp />
        <Skills />
        <Projects />
      </div>
    </ErrorBoundary>
  );
}
