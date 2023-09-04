import Class from "./GreetingCard.module.css";
import SkillIcons from "./SkillIcons";

function GreetingCard({sectionRef}) {
  const scrollTo = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth", // Add smooth scrolling animation
      });
    }
  };

  return (
    <div className={Class.container}>
      <div className={Class.navbar}>
        <span>Projects</span>
        <span onClick={scrollTo}>About</span>
        <span>Contact</span>
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
