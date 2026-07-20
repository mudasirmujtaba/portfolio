import {
  FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaBrain, FaRobot,
  FaLanguage, FaCogs, FaCamera, FaLaptopCode, FaDocker, FaDatabase,
  FaGitAlt, FaHtml5, FaCss3Alt, FaKey, FaProjectDiagram, FaMagic, FaSearch, FaSyncAlt,
  FaGraduationCap, FaAward, FaChartLine, FaShoppingCart, FaFileMedicalAlt
} from 'react-icons/fa';
import {
  SiTensorflow, SiMongodb, SiExpress, SiTypescript, SiPostgresql, SiOpencv, SiCoursera,
  SiDatacamp, SiGoogle, SiJavascript, SiPhp, SiPytorch, SiScikitlearn, SiHuggingface,
  SiNextdotjs, SiFastapi, SiDjango, SiFlask, SiTailwindcss, SiMysql, SiKubernetes
} from 'react-icons/si';
import profilePic from '../assets/Profile.png';
import lexibotImg from '../assets/lexibot.png';
import faceTrackImg from '../assets/FaceTrack Attendance Project.png';
import visionLlmImg from '../assets/vision_llm.png';
import candleBotImg from '../assets/candle_bot.png';
import drumbeatImg from '../assets/drumbeat.png';
import heartDiseaseImg from '../assets/heart_disease.png';
import nextWordImg from '../assets/next_word.png';
import churnImg from '../assets/churn.png';
import remoteSensingImg from '../assets/remote_sensing.png';
import dailyJournalImg from '../assets/Daily Jounral APP.png';

export const personalInfo = {
  name: "Mudasir Mujtaba",
  title: "AI Engineer & Full-Stack Software Developer",
  tagline: "Building production-grade AI systems and scalable web applications — from RAG pipelines to full-stack platforms.",
  email: "mudasirmujtaba15@gmail.com",
  phone: "(+92) 311-2304843",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/mudasirmujtaba/",
  github: "https://github.com/mudasirmujtaba",
  bio: "I am an AI Engineer, Full-Stack Software Developer, and Computer Science graduate of Sukkur IBA University (2022-2026), experienced in building and deploying production-grade AI systems and scalable web applications. I specialize in LLMs, Retrieval-Augmented Generation, Agentic AI, NLP, and Computer Vision, paired with full-stack development across the MERN and PERN stacks. I'm the first author of a research paper on Retrieval-Augmented legal AI submitted to IEEE ICET 2026."
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: SiPhp },
      { name: "SQL", icon: FaDatabase }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "Deep Learning", icon: FaProjectDiagram },
      { name: "NLP", icon: FaLanguage },
      { name: "Computer Vision", icon: FaCamera },
      { name: "Generative AI", icon: FaMagic },
      { name: "LLMs", icon: FaRobot },
      { name: "RAG", icon: FaSearch },
      { name: "Agentic AI", icon: FaCogs },
      { name: "Prompt Engineering", icon: FaKey }
    ]
  },
  {
    category: "AI Frameworks",
    items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "OpenCV", icon: SiOpencv },
      { name: "LangChain", icon: FaProjectDiagram },
      { name: "LangGraph", icon: FaProjectDiagram },
      { name: "Hugging Face", icon: SiHuggingface }
    ]
  },
  {
    category: "Full-Stack Development",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs", icon: FaSyncAlt },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "pgvector", icon: FaDatabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "MLflow", icon: FaChartLine },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub Actions", icon: FaGithub },
      { name: "CI/CD", icon: FaSyncAlt },
      { name: "JWT Authentication", icon: FaKey }
    ]
  }
];

export const experience = [
  {
    id: 1,
    role: "BS Computer Science",
    company: "Sukkur IBA University, Sukkur",
    duration: "2022 - 2026",
    description: "CGPA: 3.5 out of 4.0. Final Year Project: LexiBot, an AI-Powered Legal Assistant for the Pakistani Legal Domain — later developed into a hybrid RAG pipeline submitted as a first-author paper to IEEE ICET 2026."
  },
  {
    id: 2,
    role: "Freelance AI/ML Engineer & Full-Stack Developer",
    company: "Fiverr (Remote)",
    duration: "May 2024 - Present",
    description: "Delivered AI solutions involving LLMs, RAG pipelines, NLP, Computer Vision, and intelligent automation for international clients. Developed and deployed production-grade AI APIs and full-stack web applications using FastAPI, Node.js, and Docker."
  },
  {
    id: 3,
    role: "AI Development and Automation Intern",
    company: "Techrypt (Karachi, Pakistan)",
    duration: "Jun 2025 - Aug 2025",
    description: "Developed AI chatbots and automation workflows using LLMs and n8n for business process optimization. Contributed to CRM development through backend and full-stack feature implementation."
  },
  {
    id: 4,
    role: "Freelance NLP Annotation Lead",
    company: "CrowdGen (Remote)",
    duration: "Aug 2023 - Oct 2023",
    description: "Worked on large-scale NLP projects with multilingual datasets (Sindhi, Urdu, English) supporting AI model training and evaluation. Led and coordinated data annotation workflows with distributed global teams to meet quality benchmarks."
  }
];

export const publications = [
  {
    id: 1,
    title: "LexiBot: A Retrieval-Augmented Legal Assistant Unifying Professional Research and Client Guidance for the Pakistani Legal Domain",
    authors: "Mudasir Mujtaba (First Author), Mohsin Raza, Zakria, Muhammad Saddam Khokhar",
    venue: "21st IEEE International Conference on Emerging Technologies (IEEE ICET 2026), GIK Institute",
    date: "November 2026",
    status: "Submitted — Under Review",
    highlights: [
      "Hybrid Retrieval-Augmented Generation pipeline over 29,657 Pakistani legal documents and 534,567 vector chunks",
      "Improved Recall@5 from 0.640 to 0.813",
      "Precedent-based outcome prediction at 60.4% accuracy (Macro F1 0.609)"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    icon: FaGraduationCap,
    title: "HEC Need-Based Scholarship",
    description: "Awarded for Fall 2025-26 by the Institutional Scholarship Award Committee, covering full tuition and a merit-linked semester stipend."
  },
  {
    id: 2,
    icon: FaAward,
    title: "First-Author IEEE Publication",
    description: "First author of a research paper submitted to the 21st IEEE International Conference on Emerging Technologies (ICET 2026), currently under review."
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "3.5 / 4.0 CGPA",
    description: "Maintained a strong academic record throughout the BS Computer Science program at Sukkur IBA University."
  }
];

export const projects = [
  {
    id: 1,
    title: "LexiBot — AI-Powered Legal Assistant",
    role: "RAG and LLM Engineer",
    period: "Sep 2025 - May 2026",
    image: lexibotImg,
    description: "Engineered a hybrid RAG pipeline over 29,657 Pakistani legal documents for legal research, case summarization, and outcome prediction with citation-backed answers. Built a multi-dimensional evaluation covering retrieval, faithfulness, attribution, and precedent voting. Work submitted to IEEE ICET 2026.",
    tech: ["React", "FastAPI", "MongoDB", "LangChain", "pgvector", "RAG"],
    github: "https://github.com/mudasirmujtaba/Lexibot-Legal-Assistant-AI-Application",
    featured: true
  },
  {
    id: 2,
    title: "SehatSaathi — Agentic AI Health Companion",
    role: "Full-Stack and Agentic AI Engineer",
    period: "2026 - Present",
    icon: FaFileMedicalAlt,
    description: "Built an agentic AI web app that explains lab reports and prescriptions in plain language across English, Urdu, and Roman Urdu using OCR (Tesseract, PyMuPDF) and Google Gemini. Implemented RAG grounding over a medical knowledge base (pgvector), multilingual conversational Q&A with context memory, per-user history, and responsible-AI safeguards.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "LangChain", "Gemini", "Docker"],
    github: "https://github.com/mudasirmujtaba/SehatSaathi-Agentic-AI-Health-Companion",
    featured: true
  },
  {
    id: 3,
    title: "FaceTrack — Facial Recognition Attendance System",
    role: "Computer Vision and Full-Stack Engineer",
    period: "2026 - Present",
    image: faceTrackImg,
    description: "Built a facial-recognition attendance system matching live camera frames against enrolled face embeddings (InsightFace SCRFD and ArcFace, 512-d) in under two seconds, with MediaPipe-based active liveness detection to reject printed photos and screen replays. Designed three independent services with automatic absent-marking and a privacy-first design — biometric consent, irreversible embeddings instead of raw images, full data-deletion flow, and an admin audit trail.",
    tech: ["React 18", "Vite", "Tailwind", "FastAPI", "InsightFace", "MediaPipe", "MongoDB", "Docker"],
    github: "https://github.com/mudasirmujtaba",
    featured: true
  },
  {
    id: 4,
    title: "Bachat Bazar — Full-Stack MERN E-Commerce Platform",
    role: "Full-Stack MERN Developer",
    period: "2025",
    icon: FaShoppingCart,
    description: "Built an e-commerce platform with MongoDB, Express, React, and Node.js, including a storefront and a JWT-authenticated admin dashboard. Implemented CRUD product and category management, cart, guest checkout, order management, and an analytics dashboard.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    github: "https://github.com/mudasirmujtaba/Bachat-Bazar-Ecommerce-Mern-Stack-Project",
    featured: true
  },
  {
    id: 5,
    title: "Point-Supervised Remote Sensing Segmentation",
    image: remoteSensingImg,
    description: "Semantic segmentation of satellite & aerial imagery using only clicked point annotations (<0.2% of pixels). Custom Partial Cross Entropy + Focal Loss variant achieves 81% of full-supervision performance (mIoU 0.718) with a U-Net trained from scratch on a 5-class imbalanced land-cover dataset.",
    tech: ["PyTorch", "U-Net", "Computer Vision", "Python", "Scikit-Learn"],
    github: "https://github.com/mudasirmujtaba/Point-Supervised-Remote-Sensing-Segmentation",
    featured: false
  },
  {
    id: 6,
    title: "Vision LLM",
    image: visionLlmImg,
    description: "Real-time camera analytics pipeline combining computer vision and Large Language Models for industrial security and productivity monitoring. Features YOLO model fine-tuning.",
    tech: ["Python", "YOLO", "LLM", "React", "CV"],
    github: "https://github.com/mudasirmujtaba/vision_llm.git",
    featured: false
  },
  {
    id: 7,
    title: "Daily Journal Application",
    image: dailyJournalImg,
    imagePosition: "top",
    description: "Full-stack MERN journaling web application with secure JWT-based authentication, complete CRUD functionality, global state management with Context API, client-side routing with React Router, and containerized with Docker for consistent deployment.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Docker"],
    github: "https://github.com/mudasirmujtaba/Daily-Journal-App",
    featured: false
  },
  {
    id: 8,
    title: "Candle Agent Bot",
    image: candleBotImg,
    description: "Automated cryptocurrency trading bot using candlestick chart data to make trading decisions, featuring Telegram notifications.",
    tech: ["Python", "Trading APIs", "Telegram API", "Data Analysis"],
    github: "https://github.com/mudasirmujtaba/candle_bot_project.git",
    featured: false
  },
  {
    id: 9,
    title: "DrumBeat Transcriber",
    image: drumbeatImg,
    description: "Stable, automatic system for transcribing drum audio recordings into readable MIDI files. Features adaptive per-class thresholding and BPM detection.",
    tech: ["Python", "Neural Networks", "Audio Processing", "MIDI"],
    github: "https://github.com/mudasirmujtaba/drum-detection.git",
    featured: false
  },
  {
    id: 10,
    title: "Heart Disease Detection",
    image: heartDiseaseImg,
    description: "Machine learning application classifying heart disease risk using decision tree and KNN classification models.",
    tech: ["Machine Learning", "Scikit-Learn", "Python", "Data Science"],
    github: "https://github.com/mudasirmujtaba/Heart-Disease-Detection.git",
    featured: false
  },
  {
    id: 11,
    title: "Next Word Predictor",
    image: nextWordImg,
    description: "A deep learning application predicting the next word in a sequence using an LSTM neural network (150 and 100 units) trained on Shakespeare's Hamlet.",
    tech: ["LSTM", "Python", "Streamlit", "Deep Learning", "NLTK"],
    github: "https://github.com/mudasirmujtaba/Next-Word-Predictor.git",
    featured: false
  },
  {
    id: 12,
    title: "ANN Classification Churn Prediction",
    image: churnImg,
    description: "Artificial neural network classification model to predict whether a customer will churn or not based on historical data.",
    tech: ["Python", "ANN", "Deep Learning", "Data Science"],
    github: "https://github.com/mudasirmujtaba/ANN-Classification-Churn-Prediction.git",
    featured: false
  }
];

export const certifications = [
  {
    id: 1,
    title: "Claude with Amazon Bedrock",
    platform: "Anthropic / AWS",
    date: "May 2026",
    platformIcon: FaAws,
    skills: ["Claude", "Amazon Bedrock", "LLMs", "Generative AI"],
    url: "https://verify.skilljar.com/c/m6xdkxq7yq5x",
    icon: FaBrain
  },
  {
    id: 2,
    title: "Large Language Models (LLMs) Concepts",
    platform: "DataCamp",
    date: "Jun 2026",
    platformIcon: SiDatacamp,
    skills: ["LLMs", "Generative AI", "NLP", "Prompt Engineering"],
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4616cc1d95d5bc6619d1ce1f8e966418e7502132",
    icon: FaLanguage
  },
  {
    id: 3,
    title: "Deep Learning and Generative AI",
    platform: "LinkedIn Learning",
    date: "Nov 2025",
    platformIcon: FaLinkedin,
    skills: ["Deep Learning", "CNNs", "Generative AI", "NLP", "Computer Vision"],
    url: "https://www.linkedin.com/learning/certificates/5b904ccfac98ccff38f0859dbc14fd97d6553fd2e85627f5c5e4371206a4a69d",
    icon: FaBrain
  },
  {
    id: 4,
    title: "Google Prompting Essentials",
    platform: "Coursera (Google)",
    date: "Jun 2026",
    platformIcon: SiGoogle,
    skills: ["Prompt Engineering", "Generative AI", "LLMs"],
    url: "https://www.coursera.org/account/accomplishments/specialization/I74KQMTAP51K",
    icon: SiGoogle
  },
  {
    id: 5,
    title: "MLOps Essentials: Model Development and Integration",
    platform: "LinkedIn Learning",
    date: "Dec 2025",
    platformIcon: FaLinkedin,
    skills: ["AI", "Machine Learning", "MLOps"],
    url: "https://www.linkedin.com/learning/certificates/a1074a2923530c09755352c813c922a5eb30708911c90cec936a9e2e9422021e",
    icon: FaCogs
  },
  {
    id: 6,
    title: "Software Architecture: Patterns for Developers",
    platform: "LinkedIn Learning",
    date: "Dec 2025",
    platformIcon: FaLinkedin,
    skills: ["Software Architectures", "Software Engineering"],
    url: "https://www.linkedin.com/learning/certificates/c6a155f1b03771ab6decc5a6b33233019bf4d9ab0a15b0bcea12f4892d3b685a?trk=share_certificate",
    icon: FaLaptopCode
  },
  {
    id: 7,
    title: "Python for Data Science, AI and Development",
    platform: "Coursera (IBM)",
    date: "Feb 2025",
    platformIcon: SiCoursera,
    skills: ["Data Science", "AI Development", "Python"],
    url: "https://www.coursera.org/account/accomplishments/verify/P5S43UEM8P9Y",
    icon: FaPython
  },
  {
    id: 8,
    title: "Developing Front-End Apps with React",
    platform: "Coursera (IBM)",
    date: "Apr 2025",
    platformIcon: SiCoursera,
    skills: ["React.js", "Frontend Development", "JavaScript"],
    url: "https://www.coursera.org/account/accomplishments/verify/7C62B6UP16J6",
    icon: FaReact
  },
  {
    id: 9,
    title: "Developing Back-End Apps with Node.js and Express",
    platform: "Coursera (IBM)",
    date: "Apr 2025",
    platformIcon: SiCoursera,
    skills: ["Node.js", "Express.js", "Backend Developer"],
    url: "https://www.coursera.org/account/accomplishments/verify/OVHTI06PQS3O",
    icon: FaNodeJs
  },
  {
    id: 10,
    title: "Introduction to MongoDB",
    platform: "MongoDB University",
    date: "May 2025",
    platformIcon: SiMongodb,
    skills: ["MongoDB Clusters", "Schemas", "Models"],
    url: "https://learn.mongodb.com/c/iAt4M-RTT1evlr51lCEu4g",
    icon: SiMongodb
  }
];

export { profilePic };
