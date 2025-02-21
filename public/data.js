const content = {
  data: [
    {
      intro: "Hello 👋",
      info: "I'm a Software Engineer with 3 years of full stack experience.",
      info_one:
        "Passionate about clean code and love tackling challenging coding problems.",
      info_two:
        "I have broad technical experience building both backend and frontend projects from coding APIs to implementing user-friendly, accessible UIs.",
      about_para_one:
        "My journey into coding started back in 2019 when a friend introduced me to React and it's been full steam ahead since then. I taught myself the basics of JavaScript alongside an online course for web development and ended up building a few of my own full stack web applications using React, Node.js and TypeScript, breaking a lot of code along the way. Soon after, I landed my current role as a Full Stack Engineer at ListenField where I get to work on front and back end projects in React, TypeScript and Ruby.",
      about_para_two:
        "Not satisfied with just web development, I decided to embark on a computer science course in 2023 and got to grips with the fundamentals of computer science and built a couple of personal projects in Java to cement my understanding of the core concepts as well as of the language.",
      about_para_three:
        "I love the constant learning and rapid change that defines the tech world and as a Software Engineer I'm keen to stay at the forefront of software development and continue expanding my skillset 🚀",
      contact: "pennylam@live.com",
    },
  ],
  techstack: [
    {
      list: [
        {
          name: "JavaScript",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "React",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "Next.js",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "Java",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "Ruby",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "Spring",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "NodeJS",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "PostgreSQL",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "GitLab",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "GitHub",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "TailwindCSS",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "HTML5",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              height={90}
              width={90}
            />
          ),
        },
        {
          name: "CSS3",
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              height={90}
              width={90}
            />
          ),
        },
      ],
    },
  ],
  projects: [
    {
      title: "Personal Finance Dashboard",
      stack: "React, TypeScript, Next.js, Apache Echarts, Node.js, PostgreSQL",
      description:
        "A personal finance full stack web application to track and record income and expenses as well as provide an overview of your investments and pensions. Key features include user registration/login and data entry.",
      hasDemo: false,
      isFullStack: true,
      url_demo: "",
      url_code: "https://github.com/lampenny/squirrl",
      url_code_b: "https://github.com/lampenny/squirrl-api",
      image: "/pf.png",
    },
    {
      title: "Real Time Weather",
      stack: "React, TypeScript, Tailwind, Jest",
      description:
        "Fully responsive weather forecast web app with key features being location-based weather searches, an interactive map and current and weekly forecasts. Testing has been implemented using Jest and MSW to mock API calls.",
      hasDemo: true,
      isFullStack: false,
      url_demo: "https://weatherapp-pl.netlify.app/",
      url_code: "https://github.com/lampenny/weatherapp",
      url_code_b: "",
      image:
        "https://user-images.githubusercontent.com/79977073/165549822-8d9f0412-c341-46d5-b5d0-445ca479a5b1.png",
    },
    {
      title: "Payroll REST API",
      stack: "Java, Spring Boot",
      description:
        "A lightweight REST API for managing payroll data, providing endpoints for employees and payments. Users can perform CRUD operations (GET, POST, PUT, DELETE) on employee records and payment details. It follows RESTful principles, including hypermedia links for relevant operations, promoting discoverability and ease of use.",
      hasDemo: false,
      isFullStack: false,
      url_demo: "",
      url_code: "https://github.com/lampenny/payroll-api",
      url_code_b: "",
      image: "/api.png",
    },
    {
      title: "Vocabulary Builder",
      stack: "React, TypeScript, Tailwind",
      description:
        "A Japanese vocabulary builder web app designed to help language learning. It features input validation to ensure no blank entries and an interactive hover-to-reveal effect that mimics flashcards for effective memorization.",
      hasDemo: true,
      isFullStack: false,
      url_demo: "https://vocab-builder-pl.netlify.app/home",
      url_code: "https://github.com/lampenny/vocabulary-builder",
      url_code_b: "",
      image: "/vocab.png",
    },
  ],
};

export default content;
