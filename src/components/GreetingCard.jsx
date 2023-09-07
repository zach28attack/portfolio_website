import Class from "./GreetingCard.module.css";
import SkillIcons from "./SkillIcons";

function GreetingCard({projectsRef, aboutRef}) {
  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const activeSkills = {
    html: true,
    css: true,
    javascript: true,
    node: true,
    express: true,
    react: true,
    ruby: true,
    rails: true,
    mongodb: true,
    github: true,
  };

  return (
    <div className={Class.container}>
      <div className={Class.navbar}>
        <span onClick={scrollToProjects}>Projects</span>
        <span onClick={scrollToAbout}>About</span>
        <a href="mailto:rrumble250@gmail.com?subject=Web%20Development%20Oppertunity&body=">Contact Me</a>
      </div>

      <section className={Class.nameGroup}>
        <div className={Class.name}>
          <h1>Zachary Casares</h1>
          <span>Full Stack Developer</span>
        </div>
        <SkillIcons bigFont={true} activeSkills={activeSkills} />
      </section>
    </div>
  );
}

export default GreetingCard;
