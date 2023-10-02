import Class from "./Project.module.css";
import SkillIcons from "./SkillIcons";

function Project({project}) {
  return (
    <div className={Class.container}>
      <div className={Class.header}>
        <div className={Class.videoContainer}>
          <iframe src={project.videoLink} title="YouTube video player" allowFullScreen></iframe>
        </div>
        <section className={Class.description}>
          <div className={Class.projectTitle}>
            {project.name} <a href={`https://github.com/zach28attack/${project.name}`}>{"Source </>"}</a>
          </div>
          <SkillIcons bigFont={false} activeSkills={project.activeSkills} />
          <p>{project.body}</p>
        </section>
      </div>
      <p className={Class.secondaryBody}>{project.body2 && project.body2}</p>
    </div>
  );
}

export default Project;
