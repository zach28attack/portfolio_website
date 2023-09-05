import Project from "./Project";
import Class from "./ProjectSection.module.css";

function Projects() {
  const NutriTone = {
    videoLink: "https://www.youtube.com/embed/-U48AAZo_Cw?si=ocVJLtdPAAhccc14",
    name: "NutriTone",
    body: "NutriTone is a comprehensive diet tracking application designed to support users on their fitness and weight loss journey. With NutriTone, you can effortlessly monitor your calorie intake by either manually logging your meals or easily searching the USDA database. Additionally, our Coach feature empowers you to calculate your daily calorie budget, helping you to find a diet that meets your needs.",
    body2:
      "But NutriTone goes beyond just calorie counting. We recognize the importance of community and social support in achieving your health goals. That's why NutriTone offers a unique social feature that allows you to connect with like-minded individuals by joining communities. Within these communities, you can find valuable support, share your progress, and interact with others who share your fitness aspirations. NutriTone is not just an app; it's your partner on your path to a healthier lifestyle.",
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
    name: "GrapeVine",
    body: "Introducing GrapeVine, the initial version of our diet-tracking application. Built with Ruby on Rails this robust tool encompasses calorie tracking, weight loss monitoring, and macro tracking. Users can easily keep tabs on their weight loss progress while also harnessing the power of the USDA API to search for foods effortlessly.",
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
