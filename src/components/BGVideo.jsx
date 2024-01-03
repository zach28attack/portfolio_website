import Class from "./BGVideo.module.css";
import {useRef, useEffect} from "react";

function BGVideo({setIsVideoLoaded}) {
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVideoLoaded(true);
    const video = videoRef.current;
    video.play().catch((error) => {
      // Handle any errors that might occur when attempting to autoplay
      console.error("Autoplay failed:", error);
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className={Class.video}
      loop
      controlsList="nodownload"
      preload="auto"
      muted="muted"
      poster="/Untitled.mp4"
    >
      <source src="/Untitled.mp4" type="video/mp4" />
    </video>
  );
}

export default BGVideo;
