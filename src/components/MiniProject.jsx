import Class from "./MiniProject.module.css";
import SkillIcons from "./SkillIcons";

function MiniProject({project}) {
  return (
    <div className={Class.container}>
      <header className={Class.header}>
        <div className={Class.projectTitle}>
          <span>{project.name}</span> <a href={`https://github.com/zach28attack/${project.name}`}>{"Source </>"}</a>
        </div>
        <sub>
          <SkillIcons bigFont={false} activeSkills={project.activeSkills} />
        </sub>
      </header>
      <div className={Class.videoContainer}>
        <iframe src={project.videoLink} title="YouTube video player" allowFullScreen></iframe>
      </div>
      <section className={Class.description}>
        <p>{project.desc}</p>
      </section>
    </div>
  );
}

export default MiniProject;
