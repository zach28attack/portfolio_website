import Class from "./Project.module.css";
import SkillIcons from "./SkillIcons";
import {motion} from "framer-motion";

function Project({project}) {
  return (
    <motion.div
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.5, x: 0}}
      className={Class.container}
    >
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
    </motion.div>
  );
}

export default Project;
