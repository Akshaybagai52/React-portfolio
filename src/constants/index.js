import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  lexical,
  carrent,
  jobit,
  tripguide,
  threejs,
  json,
  fivestar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source Contributor",
    icon: mobile,
  },
  {
    title: "Prompt Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Net Solutions",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "Dec 2019 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",      ],
  // },
  {
    title: "SDE 1 (UI)",
    company_name: "Hashedin by Deloitte",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Spearheaded the migration of 10-14 healthcare projectrepositories fromReact 15/17 to React 18, integrating the latest features while optimizing performance by 25% across key components.",
      "Ensured over 90% test coverage for all screens using Jest and React Testing Library (RTL), and successfully transitioned from Moment.js to Luxon and from Formik to React Hook Form forimproved maintainability.",
      "Built and maintained a shared component library,replacing React-Redux with Redux Toolkit, enabling a 40% reduction in redundant code and streamlining UI consistency across allrepositories.",
    ],
  },

  {
    title: "Reactjs Developer",
    company_name: "Baseline IT Development",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Dec 2022 - July 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer Intern",
    company_name: "Full Creative",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Oct 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, javaScript and other related technologies.",
      "Directed design, writing, and production of page content to fulfill project demands and satisfy customer needs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Build HTML Email templates for company's promotional emails and also information emails to customer",
    ],
  },
  {
    title: "Invoice Processor",
    company_name: "K.K Polypipe",
    icon: meta,
    iconBg: "#383E56",
    date: "Nov 2020 - Jun 2022",
    points: [
      "Reviewed and analyzed contracts to resolve billing issues with vendors and carriers.",
      "Verifed patient insurance coverage, created fnancial plan according to treatment schedules for collections, and communicated between patient and billing company regarding health insurance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "JSON Schema",
    description:
      "While JSON is probably the most popular format for exchanging data, JSON Schema is the vocabulary that enables JSON data consistency, validity, and interoperability at scale.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: json,
    source_code_link: "https://json-schema.org/",
  },
  {
    name: "Five Star Access",
    description:
      "A mobile app built with React Native for logistic company employees for their respective purpose",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "React Native Paper",
        color: "pink-text-gradient",
      },
    ],
    image: fivestar,
    source_code_link: "https://fivestaraccess.com.au/",
  },
  {
    name: "Lexical Customization",
    description:
      "A text editor embedded in website where user can get answer from ai in the text editor and apply formatting",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Deepgram",
        color: "green-text-gradient",
      },
      {
        name: "Monorepo",
        color: "pink-text-gradient",
      },
    ],
    image: lexical,
    source_code_link: "https://playground.lexical.dev/",
  },
  {
    name: "3-D website",
    description:
      "A website in which user can create a t-shirt and change it's color, logo and full pattern in realtime ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "github.com/Akshaybagai52/3D-AI-Web/",
  },
  {
    name: "Image Recognition",
    description:
      "Web application that require front camera permission to identify the person, things, animals and upto 80 species it can identify and tell in realtime in your web app",
    tags: [
      {
        name: "tensorflow.js",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://akshaybagai52.github.io/tensorflow.js-first/",
  },
  {
    name: "Crown Clothing",
    description:
      "A comprehensive Ecommerce website in which user can add products to cart, buy, and also can pay to purchase products using online payment method",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "styled component",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://csb-1pusw4.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
