import Class from "./MiniProject.module.css";
import SkillIcons from "./SkillIcons";
import {motion} from "framer-motion";
function MiniProject({project}) {
  return (
    <motion.div
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5, x: 0}}
      className={Class.container}
    >
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
    </motion.div>
  );
}

export default MiniProject;
