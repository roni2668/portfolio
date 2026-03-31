export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "🌟 SCatch – An Online E-Commerce Platform",
    des: "A full-featured e-commerce platform with secure authentication, cart management, and Razorpay payment integration.",
    img: "/El zarzita.jpg",
    iconLists: [
      "/icons8-nodejs-48.png",
      "/icons8-express-js-40.png",
      "/icons8-mongo-db-32.png",
      "/icons8-tailwind-css-48.png",
    ],
    github: "https://github.com/roni2668/Scatch",
    liveLink: "#", // Add your live site URL here
    techStack: {
      Backend: ["Node.js", "Express.js"],
      Frontend: ["EJS Templating", "Tailwind CSS"],
      Database: ["MongoDB", "Mongoose ODM"],
      Authentication: ["Passport.js", "express-session"],
      Payment: ["Razorpay API Integration"],
      Uploads: ["Multer"],
      Styling: ["Tailwind CSS"],
    },
  },
  {
    id: 2,
    title: "🌙 Moodly",
    des: "A mood journaling platform with user profiles, image uploads, and delightful UI interactions for tracking emotions.",
    img: "/Late Night Productivity – The Midnight Hustle.jpg",
    iconLists: [
      "/icons8-nodejs-48.png",
      "/icons8-express-js-40.png",
      "/icons8-mongo-db-32.png",
      "/icons8-ejs-48.png",
      "/icons8-tailwind-css-48.png",
    ],
    github: "https://github.com/roni2668/Moodly",
    liveLink: "#", // Add your live site URL here
    techStack: {
      Backend: ["Node.js", "Express.js", "MongoDB with Mongoose"],
      Authentication: ["JWT", "Bcrypt for password hashing"],
      SessionHandling: ["Cookie-Parser"],
      Uploads: ["Multer for image uploads"],
      Frontend: ["HTML5", "TailwindCSS", "EJS Templates"],
      Styling: ["TailwindCSS"],
    },
  },
  {
    id: 3,
    title: "🎙️ Hindi ASR Optimization & Advanced Evaluation Pipeline",
    des: "This repository contains a comprehensive pipeline designed to improve and evaluate Automatic Speech Recognition (ASR) for conversational Hindi. The project transitions from standard  string matching to a sophisticated Lattice-based evaluation system, ensuring that valid linguistic variations (synonyms, number formats, and spellings) are handled fairly.",
    img: "/download (1).jpg",
    iconLists: [
      "/icons8-nlp-32.png",
      "/icons8-pandas-48.png",
      "/icons8-regex-80.png",
      "/icons8-sound-file-64.png",
    ],
    github:
      "https://github.com/roni2668/Hindi_ASR_FineTuning_and_Lattice_Evaluation_Pipeline",
    techStack: {
      Backend: [
        "Librosa",
        "Soundfile",
        "NLP: Transformers (OpenAI Whisper), Regex, Pandas",
      ],
      Frontend: ["iwer (WER), Levenshtein Distance"],
      // Add more categories as needed
    },
  },
  {
    id: 4,
    title: "♟️ Online Chess Game",
    des: "A real-time two-player online Chess game built with HTML, CSS, JavaScript, Node.js, and Express.js. Designed for interactive gameplay with clean UI and live opponent moves.",
    img: "/Motivasi.jpg",
    iconLists: [
      "/icons8-html-48.png",
      "/icons8-css-48.png",
      "/icons8-javascript-48.png",
      "/icons8-nodejs-48.png",
      "/icons8-express-js-40.png",
      "/icons8-socket-50.png",
    ],
    github: "https://github.com/roni2668/ChessGame",
    techStack: {
      Frontend: ["HTML5", "CSS3", "JavaScript"],
      Backend: ["Node.js", "Express.js", "Socket.io"],
    },
  },
  {
    id: 5,
    title: "ECC-P521 vs RSA-4096 🔐",
    des: "The study provides a multi-dimensional comparative analysis between Elliptic Curve Cryptography (ECC-P521) and RSA-4096.",
    img: "/ECC vs RSA Certificate – Difference Between ECC And RSA Certificates.jpg",
    iconLists: [
      "/icons8-python-48.png",
      "/icons8-matplotlib-48.png",
      "/icons8-kaggle-100.png",
      "/icons8-cryptography-48.png",
    ],
    github: "https://github.com/roni2668/ECC-vs-RSA-Security-Analysis",
    techStack: {
      Language: ["Python 3.x"],
      Environment: ["Kaggle / GitHub"],
      "Key Libraries": [
        "cryptography",
        "scikit-learn",
        "psutil",
        "matplotlib",
        "seaborn",
        "pandas",
      ],
    },
  },
  {
    id: 6,
    title: "🚀 MetroFlow AI: High-Performance Traffic Reliability System",
    des: "MetroFlow AI is a 10-module engineering framework designed to quantify urban traffic unreliability. Moving beyond simple average speeds, this system calculates the Buffer Index (BI) and Planning Time Index (PTI) to predict congestion shocks and their associated economic impact on modern infrastructure.",
    img: "/Metro.jpg",
    iconLists: [
      "/icons8-python-48.png",
      "/icons8-pandas-48.png",
      "/icons8-kaggle-100.png",
      "/icons8-tensorflow-48.png",
      "/icons8-c-48.png",
      "/icons8-file-64.png",
    ],
    github: "https://github.com/roni2668/MetroFlow-AI",
    techStack: {
      "Low-Level Systems": ["C++17 (G++ Compiler)", "STL", "Math.h"],
      "Intelligence Layer": [
        "Python 3.12",
        "TensorFlow 2.x",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
      ],
      Visualization: ["Plotly Express", "Mapbox API", "Chart.js", "Seaborn"],
      Environment: ["VS Code", "Kaggle Kernels (XLA/CUDA optimized)"],
    },
  },
  {
    id: 7,
    title: "🌤️ Your Naturely App – Weather Dashboard",
    des: " Tasked with building and deploying a Weather Dashboard Web App using React.js. The app should allow users to search for any city and view its live weather information using data fetched from the OpenWeatherMap API.",
    img: "/download (3).jpg",
    iconLists: [
      "/icons8-react-40.png",
      "/icons8-ux-48.png",
      "/icons8-css-48.png",
      "/icons8-javascript-48.png",
    ],
    github: "https://github.com/roni2668/Weather-App",
    liveLink: "https://weather-app-three-delta-71.vercel.app/",
    techStack: {
      Frontend: ["React.js", "JavaScript (ES6+)"],
      "API Integration": ["OpenWeatherMap API", "Fetch API"],
      Styling: ["CSS3", "Responsive Design"],
      Deployment: ["Vercel"],
      "State Management": ["React Hooks (useState, useEffect)"],
      "UI/UX": ["Modern Weather Dashboard Interface"],
    },
  },
];

export const testimonials = [
  {
    quote:
      "Roni has exceptional talent in translating requirements into reliable, maintainable products. His attention to UX and backend resilience is impressive.",
    name: "Dikshat Mehra",
    title: "Product Owner",
  },
  {
    quote:
      "A collaborative and proactive teammate who brings modern fullstack knowledge and solid delivery to each project.",
    name: "Patik Mishra",
    title: "Engineering Lead",
  },
];

export const companies = [
  {
    id: 1,
    name: "The MathCompany",
    img: "/clog.png",
    nameImg: "/comlogo.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Trainee Analyst",
    desc: "Working at The MathCompany in BLR building analytics, dashboards, and data-driven web interfaces.",
    className: "md:col-span-2",
    thumbnail: "/clog.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/roni2668",
    img: "/icons8-github-24 (1).png",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ronimandal/",
    img: "/icons8-linkedin.gif",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Im very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description:
      "React (Next.js), TypeScript, Node.js, Express, MongoDB, Tailwind CSS, Three.js, Git, and CI/CD.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
    techIcons: [
      "/icons8-javascript-48.png",
      "/icons8-typescript-48.png",
      "/icons8-react-40.png",
      "/icons8-nodejs-48.png",
      "/icons8-express-js-40.png",
      "/icons8-mongo-db-32.png",
      "/icons8-tailwind-css-48.png",
      "/icons8-threejs-48.png",
    ],
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
