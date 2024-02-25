// const imgagesPath = "https://pedro-rdias.github.io/atecweb/images/";
const imgagesPath = "./images/";
// const urlPath = "https://pedro-rdias.github.io/atecweb/";
const urlPath = "http://localhost:63342/atecweb/";

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
        },
        {
            name: "email",
            link: "mailto:Pedro.Dias.T0098247@edu.atec.pt",
            icon: `${imgagesPath}socials/email.svg`,
            message: "Envia-me um email",
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
            link: `${urlPath}#home`
        },
        {
            name: "About",
            link: `${urlPath}#aboutme`
        },
        {
            name: "Portfolio",
            link: `${urlPath}#portfolio`
        },
        {
            name: "Contact",
            link: `#contactme`
        },
        {
            name: "Timeline",
            link: `${urlPath}resume.html`
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

const resume_banner_en = {
    title: "Pedro Ribeiro Dias",
    subtitle: "Timeline",
}

const timeline_en = [
    {
        year: 2024,
        items: [
            {
                id: "professional_freelance",
                type: "professional",
                title: "Freelance Software Developer",
                institution: "",
                link: "",
                startDate: new Date("2020-05-01"),
                endDate: new Date(Date.now()),
                description: [
                    "Worked independently, and collaboratively with cross-functional teams, to deliver customized solutions for clients and partners. Leveraging my expertise in various technologies, I fulfilled responsibilities across different domains:",
                    "🎯 Developed responsive and intuitive user interfaces using Angular, React, and Vue.js",
                    "🎯 Designed and implemented scalable RESTful APIs using Node.js, Python and Golang",
                    "🎯 Utilized Docker to containerize applications, simplifying deployment and ensuring consistency across environments",
                    "🎯 Implemented SQL and NoSQL databases (such as MySQL, PostgreSQL, MongoDB)",
                    "🎯 Managed project timelines and resources to deliver projects on time and within budget.",
                    "🎯 Collaborated closely with clients to understand their requirements and provide tailored solutions.",
                ],
                stack: ["Angular", "React", "Vue.js", "Node.js", "Python", "Golang", "Docker", "MySQL", "PostgreSQL", "MongoDB", "HTML", "CSS", "TypeScript", "JavaScript"],
            },
            {
                type: "education",
                title: "Software Developer",
                institution: "42 Porto",
                link: "https://www.42porto.com/",
                startDate: new Date("2023-08-01"),
                endDate: new Date(Date.now()),
                description: [
                    "The 42 curriculum was designed in Paris in 2013 and is always under evaluation and development. Each student progresses by developing projects, winning points to level up, as if it was a game. Students who dedicate around 40h weekly to 42, are expected to complete the core curriculum in between 12 to 18 months, after they are expected to dive in their first professional experience.",
                    "After completing this stage, students can request their 42 diploma. Later on, they can decide if they want to deepen their knowledge in one of the specialization areas provided by the school.",
                    "The project-based and peer-to-peer methodology adopted by 42, combined with the mandatory professional experience, make for a fully hands-on training. This approach promotes the development of teamworking, creativity, problem-solving skills and resilience and prepares students for their future careers."
                ],
                stack: ["C", "C++", "Python", "Shell", "Git", "Docker", "Kubernetes", "HTML", "CSS", "JavaScript"],
            },
            {
                type: "education",
                title: "Specialist in Information Systems Technologies and Programming",
                institution: "ATEC",
                link: "https://www.atec.pt/cursos-formacao-profissional/curso-de-tecnico-especialista-em-tecnologias-e-programacao-de-sistemas-de-informacao.html?l=15",
                startDate: new Date("2023-10-01"),
                endDate: new Date(Date.now()),
                description: [
                    "The Specialist Technician in Information Systems Technologies and Programming course focuses on building computer applications for managing information systems, handling databases, and addressing business or other problem-solving needs. It involves implementing information systems based on web technologies, computing systems, and mobile devices, as well as designing system integration architectures.",
                    "Graduates can pursue careers as Information Systems Programming Specialists, Management Software Technicians, CRM Technicians, or Web Programmers, with skills in various programming languages and technologies such as C, C++, C#, Xamarin, Transact SQL, HTML5, CSS3, JavaScript, ASP.net, PHP, Laravel, among others.",
                ],
                stack: ["C", "C++", "C#", "Xamarin", "Transact SQL", "HTML5", "CSS3", "JavaScript", "ASP.net", "PHP", "Laravel"],
            },
        ],
    },
    {
        year: 2023,
        items: [
            {
                type: "certification",
                title: "Google Cybersecurity Specialization",
                link: "https://coursera.org/share/aafe1bf5d187a38c96ae6b6ad5909605",
                completionDate: new Date("2023-06-10"),
                description: [
                    "Course Certificates Completed:",
                    "Play It Safe: Manage Security Risks",
                    "Foundations of Cybersecurity",
                    "Tools of the Trade: Linux and SQL",
                    "Sound the Alarm: Detection and Response",
                    "Assets, Threats, and Vulnerabilities",
                    "Automate Cybersecurity Tasks with Python",
                    "Put It to Work: Prepare for Cybersecurity Jobs",
                    "Connect and Protect: Networks and Network Security"
                ],
            },
            {
                type: "certification",
                title: "Meta iOS Developer Specialization",
                link: "https://coursera.org/share/de475201435888ba91bdfb31fa7c996b",
                completionDate: new Date("2023-05-16"),
                description: [
                    "Course Certificates Completed:",
                    "React Basics",
                    "Introduction to iOS Mobile Application Development",
                    "Advanced Programming in Swift",
                    "Coding Interview Preparation",
                    "iOS App Capstone",
                    "React Native",
                    "Programming Fundamentals in Swift",
                    "Principles of UX/UI Design",
                    "Version Control",
                    "Mobile Development and JavaScript",
                    "Create the User Interface with SwiftUI",
                    "Working with Data in iOS"
                ],
            },
            {
                type: "certification",
                title: "Meta Android Developer Specialization",
                link: "https://coursera.org/share/ab955578fdadc97e1315fb7722035bea",
                completionDate: new Date("2023-04-27"),
                description: [
                    "Course Certificates Completed:",
                    "React Basics",
                    "Android App Capstone",
                    "Coding Interview Preparation",
                    "React Native",
                    "Advanced Programming in Kotlin",
                    "Create the User Interface in Android Studio",
                    "Working with Data in Android",
                    "Principles of UX/UI Design",
                    "Version Control",
                    "Mobile Development and JavaScript",
                    "Programming Fundamentals in Kotlin",
                    "Introduction to Android Mobile Application Development"
                ],
            },
            {
                type: "certification",
                title: "Meta Database Engineer Specialization",
                link: "https://coursera.org/share/3c10ac4bf65cb82cb1c860feb8d9cb42",
                completionDate: new Date("2023-04-23"),
                description: [
                    "Course Certificates Completed:",
                    "Advanced Data Modeling",
                    "Programming in Python",
                    "Database Engineer Capstone",
                    "Coding Interview Preparation",
                    "Database Structures and Management with MySQL",
                    "Database Clients",
                    "Version Control",
                    "Advanced MySQL Topics",
                    "Introduction to Databases"
                ],
            },
            {
                type: "certification",
                title: "Google Project Management Specialization",
                link: "https://coursera.org/share/da0ef1eb71820abab5ee7fc5f797a895",
                completionDate: new Date("2023-04-06"),
                description: [
                    "Course Certificates Completed:",
                    "Agile Project Management",
                    "Project Execution: Running the Project",
                    "Foundations of Project Management",
                    "Capstone: Applying Project Management in the Real World",
                    "Project Initiation: Starting a Successful Project",
                    "Project Planning: Putting It All Together"
                ],
            },
            {
                type: "certification",
                title: "Duke University Building Cloud Computing Solutions at Scale Specialization",
                link: "https://coursera.org/share/77259597a169ac2a314edc8c409d20fb",
                completionDate: new Date("2023-02-23"),
                description: [
                    "Course Certificates Completed:",
                    "Cloud Computing Foundations",
                    "Cloud Virtualization, Containers and APIs",
                    "Cloud Data Engineering",
                    "Cloud Machine Learning Engineering and MLOps"
                ],
            },
            {
                type: "certification",
                title: "Amazon Web Services AWS DevOps on AWS Specialization",
                link: "https://coursera.org/share/fe263ab5a1ffb141877ec5285a308de5",
                completionDate: new Date("2023-02-23"),
                description: [
                    "Course Certificates Completed:",
                    "AWS Cloud Technical Essentials",
                    "DevOps on AWS: Code, Build, and Test",
                    "DevOps on AWS: Release and Deploy",
                    "DevOps on AWS: Operate and Monitor"
                ],
            },
            {
                type: "certification",
                title: "Amazon Web Services AWS Fundamentals Specialization",
                link: "https://coursera.org/share/f2111a9d9d870d6a9d8a9045522f7574",
                completionDate: new Date("2023-02-16"),
                description: [
                    "Course Certificates Completed:",
                    "AWS Cloud Technical Essentials",
                    "AWS Fundamentals: Addressing Security Risk",
                    "Migrating to the AWS Cloud",
                    "AWS Fundamentals: Building Serverless Applications"
                ],
            },
            {
                type: "certification",
                title: "Meta Back-End Developer Specialization",
                link: "https://coursera.org/share/5e3037c6e95a6b7946e6981b681b0b12",
                completionDate: new Date("2023-02-15"),
                description: [
                    "Course Certificates Completed:",
                    "Programming in Python",
                    "Django Web Framework",
                    "Coding Interview Preparation",
                    "The Full Stack",
                    "Introduction to Databases for Back-End Development",
                    "Introduction to Back-End Development",
                    "APIs",
                    "Back-End Developer Capstone",
                    "Version Control"
                ],
            },
            {
                type: "certification",
                title: "Meta React Native Specialization",
                link: "https://coursera.org/share/24048248db5e1c120ef8178b19a57356",
                completionDate: new Date("2023-01-31"),
                description: [
                    "Course Certificates Completed:",
                    "React Basics",
                    "Working with Data",
                    "Capstone (React App)",
                    "React Native",
                    "Programming with JavaScript",
                    "Principles of UX/UI Design",
                    "Version Control",
                    "Introduction to Mobile Development"
                ],
            },
            {
                type: "certification",
                title: "Meta Front-End Developer Specialization",
                link: "https://coursera.org/share/e5dd36f546611942b1f715507e3c0c7b",
                completionDate: new Date("2023-01-30"),
                description: [
                    "Course Certificates Completed:",
                    "React Basics",
                    "Advanced React",
                    "Coding Interview Preparation",
                    "Introduction to Front-End Development",
                    "HTML and CSS in depth",
                    "Programming with JavaScript",
                    "Principles of UX/UI Design",
                    "Version Control",
                    "Front-End Developer Capstone"
                ],
            },
        ],
    },
    {
        year: 2022,
        items: [
            {
                title: "Java Programming and Software Engineering Fundamentals Specialization",
                link: "https://coursera.org/share/765499232dbeb87ce51f1f5126075245",
                completionDate: new Date("2022-12-27"),
                description: [
                    "Course Certificates Completed:",
                    "Java Programming: Principles of Software Design",
                    "Java Programming: Arrays, Lists, and Structured Data",
                    "Java Programming: Solving Problems with Software",
                    "Java Programming: Build a Recommendation System",
                    "Programming Foundations with JavaScript, HTML and CSS"
                ],
            },
            {
                type: "certification",
                title: "Blockchain Specialization",
                link: "https://coursera.org/share/cd620da6deb79ad802ceddaad74b8be4",
                completionDate: new Date("2022-12-22"),
                description: [
                    "Course Certificates Completed:",
                    "Blockchain Basics",
                    "Smart Contracts",
                    "Decentralized Applications (Dapps)",
                    "Blockchain Platforms"
                ],
            },
            {
                type: "certification",
                title: "Google Google IT Automation with Python Specialization",
                link: "https://coursera.org/share/44206b380cc23dca106f3a059a44b4fc",
                completionDate: new Date("2022-12-20"),
                description: [
                    "Course Certificates Completed:",
                    "Configuration Management and the Cloud",
                    "Using Python to Interact with the Operating System",
                    "Crash Course on Python",
                    "Troubleshooting and Debugging Techniques",
                    "Introduction to Git and GitHub",
                    "Automating Real-World Tasks with Python"
                ],
            },
            {
                type: "certification",
                title: "Programming with Google Go Specialization",
                link: "https://coursera.org/share/f5798811a69d7624df8d3e6e26e0276c",
                completionDate: new Date("2022-11-13"),
                description: [
                    "Course Certificates Completed:",
                    "Getting Started with Go",
                    "Functions, Methods, and Interfaces in Go",
                    "Concurrency in Go"
                ],
            },
            {
                type: "certification",
                title: "Google Google IT Automation with Python Specialization",
                link: "https://coursera.org/share/44206b380cc23dca106f3a059a44b4fc",
                completionDate: new Date("2022-12-20"),
                description: [
                    "Course Certificates Completed:",
                    "Configuration Management and the Cloud",
                    "Using Python to Interact with the Operating System",
                    "Crash Course on Python",
                    "Troubleshooting and Debugging Techniques",
                    "Introduction to Git and GitHub",
                    "Automating Real-World Tasks with Python"
                ],
            },
            {
                type: "education",
                title: "Full Stack Web Developer",
                institution: "IPP - Instituto Politécnico do Porto",
                link: "https://www.ipp.pt/",
                startDate: new Date("2023-04-01"),
                endDate: new Date("2023-09-30"),
                description: [
                    "The Full Stack Web Developer course provides a comprehensive introduction to web development, covering both front-end and back-end development. The curriculum includes a variety of programming languages and frameworks, as well as hands-on experience with real-world projects.",
                    "Graduates are prepared to pursue careers as Full Stack Web Developers, Front-End Developers, Back-End Developers, or Web Application Developers, with skills in various programming languages and technologies such as JavaScript, HTML, CSS, Node.js, Angular, SQL and MongoDB."
                ],
                stack: ["JavaScript", "HTML", "CSS", "Node.js", "Angular", "SQL", "MongoDB"],
            },
        ],
    },
    {
        year: 2021,
        items: [
            {
                type: "certification",
                title: "Google Data Analytics Specialization",
                link: "https://coursera.org/share/ab659c04db8bfb666ada2d4788c24b3b",
                completionDate: new Date("2021-07-27"),
                description: [
                    "Course Certificates Completed:",
                    "Foundations: Data, Data, Everywhere",
                    "Ask Questions to Make Data-Driven Decisions",
                    "Prepare Data for Exploration",
                    "Process Data from Dirty to Clean",
                    "Analyze Data to Answer Questions",
                    "Share Data Through the Art of Visualization",
                    "Data Analysis with R",
                    "Google Data Analytics Capstone: Complete a Case Study"
                ],
            },
        ],
    },
    {
        year: 2020,
        items: [
            {
                type: "certification",
                title: "CS50's Introduction to Computer Science",
                link: "https://certificates.cs50.io/b3f78857-3c42-4fa6-99bc-3ee8fd1158ed.png?size=letter",
                completionDate: new Date("2020-12-31"),
                description: [
                    "CS50 is Harvard's introduction to computer science and programming, suitable for all levels of experience.",
                    "It focuses on problem-solving, covering topics like algorithms, data structures, and computational thinking. The course starts with C, then moves to Python, SQL, HTML, CSS, and JavaScript.",
                    "It culminates in a final project, offering a comprehensive understanding of programming fundamentals and languages."
                ],
            },
            {
                type: "certification",
                title: "CS50’s Web Programming with Python and JavaScript",
                link: "https://certificates.cs50.io/5e3f7b0d-3f5f-4b3d-8e1e-6f3c3b6a6e8d.png?size=letter",
                completionDate: new Date("2020-12-31"),
                description: [
                    "CS50’s Web Programming with Python and JavaScript is Harvard's follow-up to CS50, focusing on web development.",
                    "The course covers Flask, Django, SQL, JavaScript, HTML, CSS, and more. It culminates in a final project, offering a comprehensive understanding of web development."
                ],
            },
            {
                id: "professional_itseeds",
                type: "professional",
                title: "Software Developer",
                institution: "IT Seeds",
                link: "https://www.linkedin.com/company/itseeds/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=pt",
                startDate: new Date("2019-09-01"),
                endDate: new Date("2020-05-31"),
                description: [
                    "Worked on a variety of projects, including web and mobile applications, and contributed to the development of internal tools and systems.",
                    "Collaborated with cross-functional teams to deliver high-quality software solutions, and participated in all stages of the software development lifecycle.",
                    "Developed and maintained RESTful APIs, and implemented scalable and secure back-end services.",
                    "Designed and developed responsive and intuitive user interfaces, and ensured seamless integration with back-end services.",
                    "Utilized version control systems to manage codebase, and participated in code reviews to ensure code quality and maintainability.",
                ],
                stack: ["Node.js", "Nest.js", "TypeScript", "JavaScript", "Angular",  "SQL", "MongoDB", "PostgreSQL", "Git", "AWS", "Google Cloud", "Docker", "Kubernetes"],
            }
        ]
    },
    {
        year: 2019,
        items: [],
    }
];

const timelineLabels_en = {
    viewMoreLabel: "View More",
    goToWebsiteLabel: "Go to Website",
    seeCertificateLabel: "See Certificate",
    seeAboveLabel: "See Above",
};