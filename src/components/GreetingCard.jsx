import Class from "./GreetingCard.module.css";

import SkillIcons from "./SkillIcons";

function GreetingCard() {
  return (
    <div className={Class.container}>
      <div className={Class.navbar}>
        <span>About</span>
        <span>Contact</span>
        <span>Resume</span>
      </div>

      <section className={Class.nameGroup}>
        <div className={Class.name}>
          <h1>Zachary Casares</h1>
          <span>Full Stack Developer</span>
        </div>
        <SkillIcons />
      </section>
    </div>
  );
}

export default GreetingCard;
