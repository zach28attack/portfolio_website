import Class from "./BGVideo.module.css";
import {IoIosArrowDown} from "react-icons/io";
function BGVideo() {
  return (
    <video
      className={Class.video}
      loop
      autoPlay
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
