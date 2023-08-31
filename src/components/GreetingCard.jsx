import Class from "./GreetingCard.module.css";
import {useState} from "react";

function GreetingCard() {
  const [clicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!clicked);
  };
  return (
    <div className={Class.container}>
      <div className={Class.name}>
        <div>
          <h1>Zachary Casares</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default GreetingCard;
