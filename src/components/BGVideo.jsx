import Class from "./BGVideo.module.css";
import {IoIosArrowDown} from "react-icons/io";
function BGVideo() {
  return (
    <div className={Class.videoContainer}>
      <div className={Class.arrow}>
        <IoIosArrowDown />
      </div>
      <video
        className={Class.video}
        loop
        autoPlay
        controlsList="nodownload"
        preload="false"
        muted="muted"
        poster="/Untitled.mp4"
      >
        <source src="/Untitled.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default BGVideo;
