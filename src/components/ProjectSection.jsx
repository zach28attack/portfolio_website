import Project from "./Project";
import Class from "./ProjectSection.module.css";

function Projects() {
  const NutriTone = {
    videoLink: "https://www.youtube.com/embed/-U48AAZo_Cw?si=ocVJLtdPAAhccc14",
    name: "NutriTone",
    body: "NutriTone is a comprehensive diet tracking application designed to support users on their fitness and weight loss journey. With NutriTone, you can effortlessly monitor your calorie intake by either manually logging your meals or easily searching the USDA database. Additionally, the Coach feature empowers you to calculate your daily calorie budget, helping you to find a diet that meets your needs.",
    body2:
      "But NutriTone goes beyond just calorie counting. I recognize the importance of community and social support in achieving your health goals. That's why NutriTone offers a unique social feature that allows you to connect with like-minded individuals by joining communities. Within these communities, you can find valuable support, share your progress, and interact with others who share your fitness aspirations. NutriTone is not just an app; it's your partner on your path to a healthier lifestyle.",
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
    body: "GrapeVine is the initial version of NutriTone, offering a comprehensive suite of features, including calorie tracking, weight loss monitoring, and macro tracking. This vibrant diet tracker is meticulously crafted using Ruby, Ruby on Rails, and Vanilla JavaScript. JavaScript plays a pivotal role in seamlessly integrating APIs and ensuring smooth modal transitions within the application.",
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
      <div className={Class.sectionTitle}>
        <span>My Projects</span>
        <div className={Class.bar}></div>
      </div>
      <Project project={NutriTone} />
      <Project project={GrapeVine} />
    </div>
  );
}

export default Projects;
