import GreetingCard from "./components/GreetingCard";
import BGVideo from "./components/BGVideo";
import About from "./components/About";
import {useRef} from "react";
import ProjectSection from "./components/ProjectSection";

function App() {
  const projectsRef = useRef();
  const aboutRef = useRef();

  return (
    <>
      <BGVideo />
      <GreetingCard projectsRef={projectsRef} aboutRef={aboutRef} />
      <div ref={projectsRef}>
        <ProjectSection />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>
    </>
  );
}

export default App;
