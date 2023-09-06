import Class from "./Project.module.css";
// import {AiFillHtml5} from "react-icons/ai";
// import {IoLogoCss3} from "react-icons/io";
// import {SiRubyonrails, SiExpress, SiMongodb} from "react-icons/si";
// import {BiLogoJavascript, BiLogoReact} from "react-icons/bi";
// import {GrNode} from "react-icons/gr";
// import {DiRuby} from "react-icons/di";
import SkillIcons from "./SkillIcons";

function Project({project}) {
  return (
    <div className={Class.container}>
      <div className={Class.header}>
        <div className={Class.videoContainer}>
          <iframe
            width="500"
            height="300"
            src={project.videoLink}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <section className={Class.description}>
          <div className={Class.projectTitle}>
            {project.name} <a href={`https://github.com/zach28attack/${project.name}`}>{"Source</>"}</a>
          </div>
          <sub>
            <SkillIcons bigFont={false} activeSkills={project.activeSkills} />
          </sub>
          <p>{project.body}</p>
        </section>
      </div>
      <p className={Class.secondaryBody}>{project.body2}</p>
    </div>
  );
}

export default Project;
