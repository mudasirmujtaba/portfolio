import {
  FaLinkedin, FaJava, FaAws
} from 'react-icons/fa';
import {
  SiTensorflow, SiMongodb, SiExpress, SiTypescript, SiPostgresql, SiOpencv, SiCoursera,
  SiDatacamp, SiGoogle, SiJavascript, SiKotlin, SiAngular, SiPytorch, SiScikitlearn, SiHuggingface,
  SiNextdotjs, SiFastapi, SiTailwindcss, SiMysql, SiKubernetes,
  SiPython, SiLangchain, SiReact, SiNodedotjs, SiHtml5, SiCss, SiDocker, SiMlflow, SiGit,
  SiGithubactions, SiJsonwebtokens, SiAnthropic, SiMake, SiTwilio, SiOpenai, SiGooglesheets,
  SiGooglecalendar
} from 'react-icons/si';
import {
  TbSql, TbMessageChatbot, TbDatabaseSearch, TbRobot, TbSparkles, TbBrain, TbNetwork,
  TbLanguage, TbEye, TbPrompt, TbTopologyStar3, TbApi, TbVectorTriangle, TbInfinity, TbWebhook,
  TbAutomation
} from 'react-icons/tb';
import lexibotImg from '../assets/lexibot.png';
import faceTrackImg from '../assets/FaceTrack Attendance Project.png';
import visionLlmImg from '../assets/vision_llm.png';
import candleBotImg from '../assets/candle_bot.png';
import heartDiseaseImg from '../assets/heart_disease.png';
import nextWordImg from '../assets/next_word.png';
import churnImg from '../assets/churn.png';
import remoteSensingImg from '../assets/remote_sensing.png';
import dailyJournalImg from '../assets/Daily Jounral APP.png';
import sehatSaathiImg from '../assets/SehatSathi.png';
import bachatBazarImg from '../assets/BachatBazar.png';
import aiReceptionistImg from '../assets/make-receptionist-cover.webp';
import euAutomationImg from '../assets/eu-automation-cover.webp';

export const personalInfo = {
  name: "Mudasir Mujtaba",
  title: "AI/ML Software Engineer",
  tagline: "I build AI-powered applications and agentic systems, turning large language models and machine learning into production software people actually use.",
  email: "mudasirmujtaba15@gmail.com",
  phone: "(+92) 311-2304843",
  location: "Karachi, Pakistan",
  linkedin: "https://www.linkedin.com/in/mudasirmujtaba/",
  github: "https://github.com/mudasirmujtaba",
  bio: "I am an AI software engineer. I build AI-powered applications and agentic systems, turning large language models and machine learning into production software people actually use. I work mostly in Python and JavaScript, with LLMs, RAG and agent frameworks on one side and full-stack web development on the other. I have strong machine learning and software foundations, I learn fast, and I enjoy taking a real problem from idea to a deployed, reliable solution."
};

// color: brand hex for logos, "accent" for concept icons, omitted for monochrome brands (render in text color)
export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "SQL", icon: TbSql, color: "accent" }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "LLMs", icon: TbMessageChatbot, color: "accent" },
      { name: "RAG", icon: TbDatabaseSearch, color: "accent" },
      { name: "Agentic AI", icon: TbRobot, color: "accent" },
      { name: "Generative AI", icon: TbSparkles, color: "accent" },
      { name: "Machine Learning", icon: TbBrain, color: "accent" },
      { name: "Deep Learning", icon: TbNetwork, color: "accent" },
      { name: "NLP", icon: TbLanguage, color: "accent" },
      { name: "Computer Vision", icon: TbEye, color: "accent" },
      { name: "Prompt Engineering", icon: TbPrompt, color: "accent" }
    ]
  },
  {
    category: "AI Frameworks",
    items: [
      { name: "LangChain", icon: SiLangchain, color: "#1C9E7E" },
      { name: "LangGraph", icon: TbTopologyStar3, color: "#1C9E7E" },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" }
    ]
  },
  {
    category: "Full-Stack Development",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "REST APIs", icon: TbApi, color: "accent" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "pgvector", icon: TbVectorTriangle, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" }
    ]
  },
  {
    category: "Automation & Integrations",
    items: [
      { name: "n8n", icon: TbAutomation, color: "#EA4B71" },
      { name: "Make.com", icon: SiMake, color: "#A855F7" },
      { name: "Twilio", icon: SiTwilio, color: "#F22F46" },
      { name: "Webhooks", icon: TbWebhook, color: "accent" },
      { name: "Google Sheets", icon: SiGooglesheets, color: "#34A853" },
      { name: "Google Calendar", icon: SiGooglecalendar, color: "#4285F4" }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "MLflow", icon: SiMlflow, color: "#0194E2" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "CI/CD", icon: TbInfinity, color: "accent" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#D63AFF" }
    ]
  }
];

export const education = {
  degree: "BS Computer Science",
  school: "Sukkur IBA University, Sukkur",
  duration: "2022 - 2026",
  cgpa: "3.5 / 4.0",
  project: "LexiBot, an AI-Powered Legal Assistant for the Pakistani Legal Domain.",
  scholarship: "HEC Need-Based Scholarship (Fall 2025-26)"
};

export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "LoopXDigital",
    type: "Full-time",
    location: "Karachi, Pakistan · Hybrid",
    duration: "Oct 2026 - Present",
    highlights: [
      "Build 12+ production-ready templates for LoopHoster, a no-code website builder, including e-commerce sites, landing pages and lightweight CRMs using Next.js, PostgreSQL and Supabase.",
      "Engineer LangChain and Langfuse AI agents for the platform, including a client-facing Sales Agent and a Site Agent that lets business owners customise templates through natural language.",
      "Contribute to Occlune, a job-search ecosystem with an AI resume and cover-letter builder, a 60,000+ listing job aggregator and tracker, and a community feed."
    ],
    tech: ["Next.js", "PostgreSQL", "Supabase", "LangChain", "Langfuse"]
  },
  {
    id: 2,
    role: "AI/ML Engineer",
    company: "21st Century AIC",
    type: "Contract",
    location: "Remote",
    duration: "Apr 2026 - Aug 2026",
    highlights: [
      "Built the Unified AI Industrial Platform for Rockwell ControlLogix PLC environments to parse L5X tag data, identify machine types, monitor live data and generate AI-driven operator recommendations.",
      "Developed a scikit-learn ANN classifier for machine-type detection and an Isolation Forest for real-time anomaly detection on statistical features from 30-second rolling windows, without labelled fault data.",
      "Built a fully local RAG operator assistant with LlamaIndex and Ollama (Llama 3.2), using nomic-embed-text embeddings over an operator playbook without external APIs.",
      "Engineered the L5X parsing and feature-engineering pipeline with MySQL, MQTT messaging and a real-time Node-RED dashboard, containerised with Docker."
    ],
    tech: ["Python", "scikit-learn", "LlamaIndex", "Ollama", "MySQL", "MQTT", "Node-RED", "Docker"]
  },
  {
    id: 3,
    role: "Full Stack AI Engineer",
    company: "Softvisionist",
    type: "Full-time",
    location: "Remote",
    duration: "Aug 2025 - May 2026",
    highlights: [
      "Integrated AI into client products, including fine-tuned YOLO models on employee face embeddings for a real-time camera attendance system and a voice-based RAG assistant for a school.",
      "Developed full-stack web applications and admin dashboards with React, Angular and Node.js.",
      "Managed cloud deployments on DigitalOcean with Docker and Kubernetes."
    ],
    tech: ["React", "Angular", "Node.js", "YOLO", "RAG", "Docker", "Kubernetes"]
  },
  {
    id: 4,
    role: "AI Development & Automation Intern",
    company: "Techrypt",
    type: "Internship",
    location: "Karachi, Pakistan",
    duration: "Jun 2025 - Aug 2025",
    highlights: [
      "Built AI automation workflows with Make.com and n8n, including an AI Receptionist integrating OpenAI, Twilio and Google services, and an AI-assisted data-update workflow with human review.",
      "Developed AI applications and API integrations with LangChain, Node.js and JavaScript, collaborating through GitHub."
    ],
    tech: ["Make.com", "n8n", "OpenAI", "Twilio", "LangChain", "Node.js", "JavaScript"]
  }
];

export const projects = [
  {
    id: 1,
    title: "LexiBot — AI-Powered Legal Assistant",
    role: "RAG and LLM Engineer",
    period: "Sep 2025 - May 2026",
    image: lexibotImg,
    imagePosition: "left top",
    description: "Built an AI platform over 29,657 documents (534,567 vector chunks) combining hybrid RAG, summarization and similarity-based outcome prediction. Raised Recall@5 from 0.640 to 0.813 and reached 60.4% outcome-prediction accuracy with multi-dimensional evaluation.",
    tech: ["React", "FastAPI", "MongoDB", "LangChain", "pgvector", "RAG"],
    github: "https://github.com/mudasirmujtaba/Lexibot-Legal-Assistant-AI-Application",
    featured: true
  },
  {
    id: 2,
    title: "SehatSaathi — Agentic AI Health Companion",
    role: "Full-Stack and Agentic AI Engineer",
    period: "2026 - Present",
    image: sehatSaathiImg,
    imagePosition: "top",
    description: "Built an AI assistant that reads medical documents through OCR and explains them in plain language, grounded through retrieval over a medical knowledge base using pgvector.",
    tech: ["Python", "FastAPI", "LangChain", "Tesseract", "pgvector"],
    github: "https://github.com/mudasirmujtaba/SehatSaathi-Agentic-AI-Health-Companion",
    featured: true
  },
  {
    id: 13,
    title: "Plumbing AI Receptionist — Make.com Automation",
    period: "2026",
    image: aiReceptionistImg,
    description: "AI-assisted automation that recovers missed calls for plumbing businesses: it texts callers through Twilio, qualifies leads in an AI conversation, books appointments in Google Calendar, flags urgent jobs, and sends follow-ups and review requests.",
    tech: ["Make.com", "Twilio", "OpenAI", "Google Sheets", "Google Calendar", "Make Data Stores"],
    github: "https://github.com/mudasirmujtaba/Make.com-AI-Receptionist-for-Plumbing-Services",
    featured: true
  },
  {
    id: 14,
    title: "EU Database Update Automation — AI-Assisted n8n Workflow",
    period: "2026",
    image: euAutomationImg,
    description: "Client project: an n8n pipeline that keeps a structured EU records database current. AI agents match incoming changes to records and draft updates with confidence scores, and low-confidence cases go to a human reviewer before anything is written.",
    tech: ["n8n", "OpenAI API", "Google Sheets", "Webhooks", "JavaScript"],
    github: "https://github.com/mudasirmujtaba/eu-database-update-automation",
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
    image: bachatBazarImg,
    imagePosition: "left top",
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
    description: "Built a video analytics pipeline combining YOLO and OpenCV computer vision with LLMs for industrial security and productivity monitoring, with a FastAPI backend and Next.js dashboard.",
    tech: ["Python", "YOLO", "OpenCV", "LLM", "FastAPI", "Next.js"],
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

// Newest first; the Certifications section shows the first few and expands on demand
export const certifications = [
  {
    id: 1,
    title: "Associate AI Engineer for Developers",
    platform: "DataCamp",
    date: "2026",
    platformIcon: SiDatacamp,
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/e8736c49545760b80a155cc9c09c48bf8e3bbcac"
  },
  {
    id: 2,
    title: "Building with the Claude API",
    platform: "Anthropic",
    platformIcon: SiAnthropic,
    url: "https://verify.skilljar.com/c/spd35vtvk6ba"
  },
  {
    id: 3,
    title: "Claude Code 101",
    platform: "Anthropic",
    platformIcon: SiAnthropic,
    url: "https://verify.skilljar.com/c/novqe5gge4v2"
  },
  {
    id: 4,
    title: "Large Language Models (LLMs) Concepts",
    platform: "DataCamp",
    date: "Jun 2026",
    platformIcon: SiDatacamp,
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4616cc1d95d5bc6619d1ce1f8e966418e7502132"
  },
  {
    id: 5,
    title: "Google AI Essentials",
    platform: "Coursera (Google)",
    date: "Jun 2026",
    platformIcon: SiGoogle,
    url: "https://www.coursera.org/account/accomplishments/specialization/WDEL9WC5UNOG"
  },
  {
    id: 6,
    title: "Introduction to Claude Cowork",
    platform: "Anthropic",
    date: "May 2026",
    platformIcon: SiAnthropic,
    url: "https://verify.skilljar.com/c/ywm9mh2dt8pg"
  },
  {
    id: 7,
    title: "Claude with Amazon Bedrock",
    platform: "Anthropic / AWS",
    date: "May 2026",
    platformIcon: FaAws,
    url: "https://verify.skilljar.com/c/m6xdkxq7yq5x"
  },
  {
    id: 8,
    title: "AWS Certified Cloud Practitioner (CLF-C02) Cert Prep",
    platform: "LinkedIn Learning",
    date: "Dec 2025",
    platformIcon: FaAws,
    url: "https://www.linkedin.com/learning/certificates/d771980c3909d44bc9b4c5315c3772ea8ee9c33f7d0dbf0fb2b6f8a21f36e8e8"
  },
  {
    id: 9,
    title: "Microsoft Azure Fundamentals (AZ-900) Cert Prep: Cloud Concepts",
    platform: "LinkedIn Learning",
    date: "Dec 2025",
    platformIcon: FaLinkedin,
    url: "https://www.linkedin.com/learning/certificates/cb80a049b32f42115f459e9d4eaf428b80cf0c522452878df9ee68b54fbdd272"
  },
  {
    id: 10,
    title: "Deep Learning with Python: Optimizing Deep Learning Models",
    platform: "LinkedIn Learning",
    date: "Dec 2025",
    platformIcon: FaLinkedin,
    url: "https://www.linkedin.com/learning/certificates/03e97082fd130d066e45ee49256d0bc22e017ae933509e8e87efd6e2d494bab0"
  },
  {
    id: 11,
    title: "MLOps Essentials: Model Development and Integration",
    platform: "LinkedIn Learning",
    date: "Dec 2025",
    platformIcon: FaLinkedin,
    url: "https://www.linkedin.com/learning/certificates/a1074a2923530c09755352c813c922a5eb30708911c90cec936a9e2e9422021e"
  },
  {
    id: 12,
    title: "Software Architecture: Patterns for Developers",
    platform: "LinkedIn Learning",
    date: "Dec 2025",
    platformIcon: FaLinkedin,
    url: "https://www.linkedin.com/learning/certificates/c6a155f1b03771ab6decc5a6b33233019bf4d9ab0a15b0bcea12f4892d3b685a?trk=share_certificate"
  },
  {
    id: 13,
    title: "Deep Learning and Generative AI",
    platform: "LinkedIn Learning",
    date: "Nov 2025",
    platformIcon: FaLinkedin,
    url: "https://www.linkedin.com/learning/certificates/5b904ccfac98ccff38f0859dbc14fd97d6553fd2e85627f5c5e4371206a4a69d"
  },
  {
    id: 14,
    title: "Introduction to Prompt Engineering for Generative AI",
    platform: "LinkedIn Learning",
    date: "Nov 2025",
    platformIcon: FaLinkedin,
    url: "https://www.linkedin.com/learning/certificates/01d69cb8f5aa5393c2692dd862834696ebc355459824ad633df0b4f611e26348"
  },
  {
    id: 15,
    title: "Introduction to MongoDB",
    platform: "MongoDB University",
    date: "May 2025",
    platformIcon: SiMongodb,
    url: "https://learn.mongodb.com/c/iAt4M-RTT1evlr51lCEu4g"
  },
  {
    id: 16,
    title: "Developing Front-End Apps with React",
    platform: "Coursera (IBM)",
    date: "Apr 2025",
    platformIcon: SiCoursera,
    url: "https://www.coursera.org/account/accomplishments/verify/7C62B6UP16J6"
  },
  {
    id: 17,
    title: "Developing Back-End Apps with Node.js and Express",
    platform: "Coursera (IBM)",
    date: "Apr 2025",
    platformIcon: SiCoursera,
    url: "https://www.coursera.org/account/accomplishments/verify/OVHTI06PQS3O"
  },
  {
    id: 18,
    title: "Introduction to Git and GitHub",
    platform: "Coursera",
    date: "Mar 2025",
    platformIcon: SiCoursera,
    url: "https://www.coursera.org/account/accomplishments/verify/S9SG6M1SO26V"
  },
  {
    id: 19,
    title: "Python for Data Science, AI and Development",
    platform: "Coursera (IBM)",
    date: "Feb 2025",
    platformIcon: SiCoursera,
    url: "https://www.coursera.org/account/accomplishments/verify/P5S43UEM8P9Y"
  },
  {
    id: 20,
    title: "AI For Everyone",
    platform: "DeepLearning.AI (Coursera)",
    date: "Feb 2025",
    platformIcon: SiCoursera,
    url: "https://www.coursera.org/account/accomplishments/records/ROP15GE94UXP"
  },
  {
    id: 21,
    title: "Understanding Machine Learning",
    platform: "DataCamp",
    date: "Feb 2025",
    platformIcon: SiDatacamp,
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/ffd325e0ae8c039d32c8384c9f70a661c81de455"
  },
  {
    id: 22,
    title: "Understanding Artificial Intelligence",
    platform: "DataCamp",
    date: "Feb 2025",
    platformIcon: SiDatacamp,
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/bb9cd60505b869dc0b95aadd0a913f632da9729c"
  },
  {
    id: 23,
    title: "Introduction to SQL",
    platform: "DataCamp",
    date: "Jun 2024",
    platformIcon: SiDatacamp,
    url: "https://www.datacamp.com/statement-of-accomplishment/course/e5c7b9fbcde9a45924f6b64e6c9fe0ec9d9b13e9?raw=1"
  },
  {
    id: 24,
    title: "Python Data Science Fundamentals",
    platform: "DataCamp",
    date: "Apr 2024",
    platformIcon: SiDatacamp,
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/872ba652144875741b9f46df6859337f96b3605e"
  },
  {
    id: 25,
    title: "Introduction to Python",
    platform: "DataCamp",
    date: "Apr 2024",
    platformIcon: SiDatacamp,
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/1f310d3937b7b2b5574ead3a215438702ed606ab"
  }
];

