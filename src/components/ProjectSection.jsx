import Project from "./Project";
import Class from "./ProjectSection.module.css";

function Projects() {
  const NutriTone = {
    videoLink: "https://www.youtube.com/embed/-U48AAZo_Cw?si=ocVJLtdPAAhccc14",
    name: "NutriTone",
    body: "A diet tracker application that helps users along their fitness/weight loss journey. Users can track their calorie intake by logging meals they eat manually or by searching the USDA database. Users can also calculate their daily calorie budgets using the Coach feature & track their weight loss. NutriTone also boasts a social feature. Allowing users to join communities to find support and interact with others in the community.",
    activeSkills: {
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
    },
  };
  const GrapeVine = {
    videoLink: "https://www.youtube.com/embed/-U48AAZo_Cw?si=ocVJLtdPAAhccc14",
    name: "NutriTone",
    body: "A diet tracker application that helps users along their fitness/weight loss journey. Users can track their calorie intake by logging meals they eat manually or by searching the USDA database. Users can also calculate their daily calorie budgets using the Coach feature & track their weight loss. NutriTone also boasts a social feature. Allowing users to join communities to find support and interact with others in the community.",
    activeSkills: {
      html: true,
      css: true,
      javascript: true,
      node: false,
      express: false,
      react: false,
      ruby: true,
      rails: true,
      mongodb: false,
      github: false,
    },
  };
  return (
    <div className={Class.container}>
      <Project project={NutriTone} />
      <Project project={GrapeVine} />
    </div>
  );
}

export default Projects;
