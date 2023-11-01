import Class from "./LoadingScreen.module.css";
import {AiFillBug} from "react-icons/ai";
import {useState, useEffect} from "react";

export default function LoadingScreen({isVideoLoaded}) {
  const [dots, setDots] = useState("");
  const [renderLoading, setRenderLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (dots.length >= 4) {
        return;
      }
      setDots((prevDots) => prevDots + ".");
    }, 1000);

    if (isVideoLoaded && dots.length >= 4) {
      setRenderLoading(false);
    }
    return () => clearTimeout(timer);
  }, [dots, isVideoLoaded]);

  return (
    <>
      {renderLoading && (
        <div className={Class.container}>
          <div className={Class.message}>
            <AiFillBug className={Class.bug} />
            Loading{dots}
          </div>
        </div>
      )}
    </>
  );
}
