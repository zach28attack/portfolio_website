import Class from "./Project.module.css";
// import {AiFillHtml5} from "react-icons/ai";
// import {IoLogoCss3} from "react-icons/io";
// import {SiRubyonrails, SiExpress, SiMongodb} from "react-icons/si";
// import {BiLogoJavascript, BiLogoReact} from "react-icons/bi";
// import {GrNode} from "react-icons/gr";
// import {DiRuby} from "react-icons/di";
import SkillIcons from "./SkillIcons";

function Project() {
  const activeSkills = {
    html: true,
    css: true,
    javascript: true,
    node: true,
    express: true,
    react: true,
    ruby: false,
    rails: false,
    mongodb: true,
    github: false,
  };
  return (
    <div className={Class.container}>
      <div className={Class.videoContainer}>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/-U48AAZo_Cw?si=ocVJLtdPAAhccc14"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <section className={Class.description}>
        <h1>NutriTone</h1>
        <sub>
          <SkillIcons bigFont={false} activeSkills={activeSkills} />
        </sub>
        <p>
          A diet tracker application that helps users along their fitness/weight loss journey. Users can track their
          calorie intake by logging meals they eat manually or by searching the USDA database. Users can also calculate
          their daily calorie budgets using the Coach feature & track their weight loss. NutriTone also boasts a social
          feature. Allowing users to join communities to find support and interact with others in the community.
        </p>
      </section>
    </div>
  );
}

export default Project;
