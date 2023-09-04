import GreetingCard from "./components/GreetingCard";
import BGVideo from "./components/BGVideo";
import About from "./components/About";
import {useRef} from "react";

function App() {
  const sectionRef = useRef(null);
  return (
    <>
      <GreetingCard sectionRef={sectionRef} />
      <BGVideo />
      <div ref={sectionRef}>
        <About />
      </div>
    </>
  );
}

export default App;
