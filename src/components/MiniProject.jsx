import Class from "./MiniProject.module.css";
import SkillIcons from "./SkillIcons";

function MiniProject({project}) {
  return (
    <div className={Class.container}>
      <header>
        <div className={Class.projectTitle}>
          {project.name} <a href={`https://github.com/zach28attack/${project.name}`}>{"Source </>"}</a>
        </div>
        <sub>
          <SkillIcons bigFont={false} activeSkills={project.activeSkills} />
        </sub>
      </header>
      <div className={Class.videoContainer}>
        <iframe width="350" height="200" src={project.videoLink} title="YouTube video player"></iframe>
      </div>
      <section className={Class.description}>
        <p>{project.desc}</p>
      </section>
    </div>
  );
}

export default MiniProject;
