import Class from "./BGVideo.module.css";

function BGVideo() {
  return (
    <div className={Class.videoContainer}>
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
