import WelcomeComp from "../components/WelcomeComp";
import ErrorBoundary from "../ErrorBoundary";
import React from "react";
import Skills from "./skills/index";
import Projects from "./projects/index";
import Contacts from "./contacts/index";
export default function Home() {

  return (
    <ErrorBoundary>
      <WelcomeComp />
      <Skills />
      <Projects />
      <Contacts />
    </ErrorBoundary>
  );
}
