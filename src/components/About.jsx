import Class from "./About.module.css";

function About() {
  return (
    <div className={Class.container}>
      <section className={Class.card}>
        <h1>About Me</h1>
        <article className={Class.article}>
          Hello, my name is Zachary Casares, i'm a self-taught full-stack web developer on an exciting journey in the
          world of technology. My passion for web development and my dedication to learning have been the driving forces
          behind my transition from a diverse range of roles to becoming a web developer.
          <h3>Tech Enthusiast and Self-Learner </h3>I love tech. It's not just a job for me; it's a genuine passion.
          Teaching myself new technologies and staying updated with industry trends is what keeps me motivated. My
          journey into web development started with an insatiable curiosity, and I've never looked back.
          <h3>Diverse Work Experience</h3> My professional journey has been unconventional and diverse. I began as a
          seasonal greenskeeper right after high school. Five years later, I had worked my way up to becoming an
          operator, mastering various equipment and processes along the way. When I moved to Arizona, I pivoted into a
          new field, working as a small engines mechanic at a golf cart repair shop. Two years later, I took on another
          challenge, joining a mechanic shop, where I was offered the opportunity to intern and get sponsored to become
          a certified mechanic. However, I declined the offer because my heart was set on becoming a web developer.
          <h3>Full-Stack Web Development Skills</h3> My technical skill set includes a wide range of technologies such
          as Ruby, Ruby on Rails, HTML/CSS, React, JavaScript, Node.js, Express.js, MongoDB, and proficiency with
          GitHub. Although I don't have formal professional experience in web development yet, my self-taught journey
          has equipped me with the skills and determination needed to tackle real-world challenges.
          <h3>Problem Solver and Lifelong Learner</h3> I thrive on solving complex problems and finding innovative
          solutions. Whether it's troubleshooting a malfunctioning engine or crafting a dynamic web application, I
          approach every task with dedication and a hunger for knowledge. I'm committed to continuous learning and
          staying at the forefront of the rapidly evolving tech landscape. <h3>Get in Touch</h3> I'm always eager to
          take on new challenges and collaborate on exciting projects. If you're looking for a full-stack web developer
          who is passionate, adaptable, and ready to make a mark in the tech industry, please don't hesitate to get in
          touch. You can reach me via email at [Email] or connect with me on [LinkedIn/GitHub].
        </article>
      </section>
    </div>
  );
}

export default About;
