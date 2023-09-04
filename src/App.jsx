import GreetingCard from "./components/GreetingCard";
import BGVideo from "./components/BGVideo";
import About from "./components/About";
import {useRef} from "react";
import ProjectSection from "./components/ProjectSection";

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  return (
    <>
      <GreetingCard projectsRef={projectsRef} aboutRef={aboutRef} />
      <BGVideo />
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
