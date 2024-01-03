import Class from "./BGVideo.module.css";
import {useRef, useEffect} from "react";

function BGVideo({setIsVideoLoaded}) {
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <video ref={videoRef} className={Class.video} controlsList="nodownload" muted="muted" poster="/Untitled.mp4">
      <source src="/Untitled.mp4" type="video/mp4" />
    </video>
  );
}

export default BGVideo;
