import GreetingCard from "./components/GreetingCard";
import BGVideo from "./components/BGVideo";
import About from "./components/About";
import {useRef, useState} from "react";
import ProjectSection from "./components/ProjectSection";

import LoadingScreen from "./components/LoadingScreen";

function App() {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      <LoadingScreen isVideoLoaded={isVideoLoaded} />
      <BGVideo setIsVideoLoaded={setIsVideoLoaded} />
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
