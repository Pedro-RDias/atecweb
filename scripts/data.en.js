// const imgagesPath = "https://pedro-rdias.github.io/atecweb/images/";
const imgagesPath = "./images/";
const skills = [
    {name: "JavaScript", img: "js", tags: ["frontend", "backend", "fullstack", "web", "programming language"]},
    {name: "TypeScript", img: "ts", tags: ["frontend", "backend", "fullstack", "web", "programming language"]},
    {name: "Go", img: "go", tags: ["backend", "programming language"]},
    {name: "Python", img: "py", tags: ["backend", "programming language"]},
    {name: "Node.js", img: "nodejs", tags: ["backend", "web", "framework"]},
    {name: "Express", img: "express", tags: ["backend", "web", "framework"]},
    {name: "Nest.js", img: "nestjs", tags: ["backend", "web", "framework"]},
    {name: "React", img: "react", tags: ["frontend", "web", "library"]},
    {name: "Redux", img: "redux", tags: ["frontend", "state management", "library"]},
    {name: "Next.js", img: "nextjs", tags: ["frontend", "web", "framework"]},
    {name: "Vue.js", img: "vue", tags: ["frontend", "web", "framework"]},
    {name: "Nuxt.js", img: "nuxtjs", tags: ["frontend", "web", "framework"]},
    {name: "Angular", img: "angular", tags: ["frontend", "web", "framework"]},
    {name: "Jest", img: "jest", tags: ["testing", "framework"]},
    {name: "Vite", img: "vite", tags: ["frontend", "web", "build tool"]},
    {name: "Django", img: "django", tags: ["backend", "web", "framework", "python"]},
    {name: "Flask", img: "flask", tags: ["backend", "web", "framework", "python"]},
    {name: "FastAPI", img: "fastapi", tags: ["backend", "web", "framework", "python"]},
    {name: "C#", img: "cs", tags: ["backend", "desktop", "programming language"]},
    {name: ".NET", img: "dotnet", tags: ["backend", "desktop", "framework", "c#"]},
    {name: "C", img: "c", tags: ["backend", "system", "programming language"]},
    {name: "C++", img: "cpp", tags: ["backend", "system", "programming language"]},
    {name: "Java", img: "java", tags: ["backend", "mobile", "programming language"]},
    {name: "Spring", img: "spring", tags: ["backend", "framework"]},
    {name: "Kotlin", img: "kotlin", tags: ["backend", "mobile", "programming language"]},
    {name: "Android Studio", img: "androidstudio", tags: ["mobile", "development environment"]},
    {name: "Rust", img: "rust", tags: ["backend", "system", "programming language"]},
    {name: "Solidity", img: "solidity", tags: ["blockchain", "smart contracts", "programming language"]},
    {name: "MongoDB", img: "mongodb", tags: ["database", "NoSQL"]},
    {name: "PostgreSQL", img: "postgres", tags: ["database", "SQL"]},
    {name: "MySQL", img: "mysql", tags: ["database", "SQL"]},
    {name: "Redis", img: "redis", tags: ["database", "caching"]},
    {name: "SQLite", img: "sqlite", tags: ["database", "SQL"]},
    {name: "HTML", img: "html", tags: ["frontend", "web", "markup language"]},
    {name: "CSS", img: "css", tags: ["frontend", "web", "stylesheet language"]},
    {name: "Sass", img: "sass", tags: ["frontend", "web", "stylesheet language"]},
    {name: "Bootstrap", img: "bootstrap", tags: ["frontend", "web", "framework"]},
    {name: "ReactiveX", img: "reactivex", tags: ["reactive programming", "library"]},
    {name: "Postman", img: "postman", tags: ["API", "testing", "tool"]},
    {name: "Docker", img: "docker", tags: ["containerization", "tool"]},
    {name: "Kubernetes", img: "kubernetes", tags: ["container orchestration", "tool"]},
    {name: "Linux", img: "linux", tags: ["operating system"]},
    {name: "Bash", img: "bash", tags: ["scripting", "shell"]},
    {name: "Git", img: "git", tags: ["version control", "tool"]},
    {name: "GitHub Actions", img: "githubactions", tags: ["CI/CD", "automation", "tool"]},
];

const skills_en = {
    title: "Skills",
    input_label: "You can search for more: ",
    input_placeholder: "Search for a language, framework, or tool",
};

const banner_en = {
    emoji: "👋",
    title: "Hi, I'm Pedro Dias",
    subtitle: "I'm a ",
    jobTitles: [
        "Full Stack Developer",
        "Cybersecurity Enthusiast",
        "AI and Blockchain Fan",
        "Fluent in JavaScript, Python, and Go",
    ],
    img: `${imgagesPath}profile.jpg`,
    alt: "Profile Picture of Pedro Dias",
    contact_btn: "Contact Me",
};

const about_en = {
    title: "About Me",
    description: ["I am a software developer from Portugal. With a strong background in programming and a passion for continuous learning, " +
    "I have acquired expertise in various languages including Python, TypeScript, and Golang. My curiosity and drive for self-improvement " +
    "have led me to constantly seek out new challenges and expand my skillset.",
        "I had the privilege of working on multinational projects, contributing to applications used " +
        "by users worldwide. These experiences have provided me with valuable insights into global software development practices and have " +
        "sharpened my ability to collaborate effectively across diverse teams and cultures.",
        "I completed several specializations from Google, Meta, and some other institutions:"
    ],
}

const certification_en = {
    title: "Certifications",
    certifications: [
        {
            title: "Meta Fulll Satck Engineer",
            institution: "Coursera",
            date: "2023",
            badge: `${imgagesPath}badges/meta-full-stack-engineer-certificate.png`,
            link: "https://www.credly.com/badges/fbab9b0b-81e3-488e-ba67-5b2280341837/public_url",
        },
        {
            title: "Google Cibersecurity Professional Certificate",
            institution: "Coursera",
            date: "2023",
            badge: `${imgagesPath}badges/google-cybersecurity-certificate.png`,
            link: "https://www.credly.com/badges/af6d0921-75a0-4209-b292-7e49cf9a75d8/public_url",
        },
        {
            title: "Meta Generalist Software Engineer",
            institution: "Coursera",
            date: "2023",
            badge: `${imgagesPath}badges/meta-generalist-software-engineer-certificate.png`,
            link: "https://www.credly.com/badges/ea835e38-cc3e-4c61-8749-475a0d2ee3b9/public_url",
        },
        {
            title: "Google IT Automation with Python Professional Certificate",
            institution: "Coursera",
            date: "2023",
            badge: `${imgagesPath}badges/google-it-automation-certificate.png`,
            link: "https://www.credly.com/badges/b4b1cdd1-c390-4114-bd0b-ddc3bd842063/public_url",
        },
        {
            title: "Google Project Management Professional Certificate",
            institution: "Coursera",
            date: "2023",
            badge: `${imgagesPath}badges/google-project-management-certificate.2.png`,
            link: "https://www.credly.com/badges/a93ec355-0130-43b8-b37d-845b6041675a/public_url",
        },
        {
            title: "Google Data Analytics Professional Certificate",
            institution: "Coursera",
            date: "2021",
            badge: `${imgagesPath}badges/google-data-analytics-certificate.2.png`,
            link: "https://www.credly.com/badges/5f1680a1-08be-4747-bc1b-9daf6c3bf8e7/public_url",
        },
    ],
};


const languages_en = {
    title: "Languages",
    languages: [
        {
            name: "Portuguese",
            level: "Native",
            percentage: 100,
        },
        {
            name: "English",
            level: "Full Professional Proficiency",
            percentage: 99,
        },
        {
            name: "Spanish",
            level: "Professional Proficiency",
            percentage: 60,
        },
        {
            name: "French",
            level: "Elementary Proficiency",
            percentage: 30,
        },
        {
            name: "German",
            level: "Elementary Proficiency",
            percentage: 25,
        },
    ],

}

const interests_en = {
    title: "Interests",
    interests: [
        {
            title: "Cybersecurity",
            icon: `${imgagesPath}interests/cyber.svg`,
        },
        {
            title: "AI and Machine Learning",
            icon: `${imgagesPath}interests/ai.svg`,
        },
        {
            title: "Web Development",
            icon: `${imgagesPath}interests/web.svg`,
        },
    ]
};

const hobbies_en = {
    title: "Hobbies",
    hobbies: [
        {
            title: "Audiobooks",
            icon: `${imgagesPath}hobbies/audiobooks.svg`,
        },
        {
            title: "Writing",
            icon: `${imgagesPath}hobbies/writing.svg`,
        },
        {
            title: "Music",
            icon: `${imgagesPath}hobbies/music.svg`,
        },
        {
            title: "Traveling",
            icon: `${imgagesPath}hobbies/travel.svg`,
        },
        {
            title: "Cooking",
            icon: `${imgagesPath}hobbies/cooking.svg`,
        },
        {
            title: "Hiking",
            icon: `${imgagesPath}hobbies/hiking.svg`,
        }
    ]
};

const portfolio_en = {
    title: "Portfolio",
    linkProjectLabel: "Try it out",
    linkCodeLabel: "Check the code",
    projects: [
        {
            title: "Ticketing App",
            description: "An app for selling and buying tickets for events",
            img: "https://placehold.co/400X250",
            linkProject: "https://github.com/Pedro-RDias",
            linkCode: "https://github.com/Pedro-RDias",
            stack: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes", "GitHub Actions", "HTML", "CSS", "TypeScript", "Redux", "Microservices"]
        },
        {
            title: "E-commerce App",
            description: "An app for selling and buying products",
            img: "https://placehold.co/400X250",
            linkProject: "https://github.com/Pedro-RDias",
            linkCode: "https://github.com/Pedro-RDias",
            stack: ["Nest.js", "PostgreSQL", "Docker", "Kubernetes", "GitHub Actions", "HTML", "CSS", "TypeScript"]
        },
        {
            title: "Social Media App",
            description: "An app for sharing posts and photos",
            img: "https://placehold.co/400X250",
            linkProject: "https://github.com/Pedro-RDias",
            linkCode: "https://github.com/Pedro-RDias",
            stack: ["Vue.js", "Express", "MongoDB", "Docker", "Kubernetes", "GitHub Actions", "HTML", "CSS", "TypeScript"]
        },
        {
            title: "Blog App",
            description: "An app for writing and sharing blog posts",
            img: "https://placehold.co/400X250",
            linkProject: "https://github.com/Pedro-RDias",
            linkCode: "https://github.com/Pedro-RDias",
            stack: ["Next.js", "Flask", "PostgreSQL", "Docker", "Kubernetes", "GitHub Actions", "HTML", "CSS", "TypeScript"]
        },
        {
            title: "Chat App",
            description: "An app for sending and receiving messages",
            img: "https://placehold.co/400X250",
            linkProject: "https://github.com/Pedro-RDias",
            linkCode: "https://github.com/Pedro-RDias",
            stack: ["Angular", "Django", "PostgreSQL", "Docker", "Kubernetes", "GitHub Actions", "HTML", "CSS", "TypeScript"]
        },
        {
            title: "E-learning App",
            description: "An app for publishing and selling online courses",
            img: "https://placehold.co/400X250",
            linkProject: "https://github.com/Pedro-RDias",
            linkCode: "https://github.com/Pedro-RDias",
            stack: ["Nuxt.js", "FastAPI", "MongoDB", "Docker", "Kubernetes", "GitHub Actions", "HTML", "CSS", "TypeScript"]
        },
    ],
}

const contact_en = {
    title: "Where to find me?",
    socials: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/pedroribeirodias/",
            icon: `${imgagesPath}socials/linkedin.svg`,
            message: "Connect with me on LinkedIn",
        },
        {
            name: "GitHub",
            link: "https://github.com/Pedro-RDias/",
            icon: `${imgagesPath}socials/github.svg`,
            message: "Find my projects on GitHub",
        },
        {
            name: "Dev",
            link: "https://dev.to/",
            icon: `${imgagesPath}socials/dev.svg`,
            message: "Read my articles on Dev",
        }
    ],
    formTitle: "Want to get in touch?",
    sucessMessage: {
        title: "Message Sent",
        message: "Thank you for reaching out to me. I will get back to you as soon as possible."
    },
    formFields: [
        {
            name: "firstName",
            type: "text",
            placeholder: "First Name",
            label: "What's your first name?",
            size: 6,
            element: "input",
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            label: "What's your last name?",
            size: 6,
            element: "input",
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "What's your email?",
            size: 12,
            element: "input",
        },
        {
            name: "message",
            type: "text",
            placeholder: "Message",
            label: "What do you wish to tell me?",
            size: 12,
            element: "textarea",
        }
    ],
    formInputError: "Please fill out this field.",
    submitBtn: "Send Message",
};

const navbar_en = {
    title: "Pedro Ribeiro Dias",
    links: [
        {
            name: "Home",
            link: "#home",
        },
        {
            name: "About",
            link: "#aboutme",
        },
        {
            name: "Portfolio",
            link: "#portfolio",
        },
        {
            name: "Contact",
            link: "#contactme",
        },
        {
            name: "Resume",
            link: "#",
        }
    ],
    languageDropdown: {
        title: "Language",
        options: [
            {
                name: "EN",
                code: "en"
            },
            {
                name: "PT",
                code: "pt"
            }
        ]
    }
};