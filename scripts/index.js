const skills = [
    {name: "JavaScript", img: "js"},
    {name: "TypeScript", img: "ts"},
    {name: "Node.js", img: "nodejs"},
    {name: "Express", img: "express"},
    {name: "Nest.js", img: "nestjs"},
    {name: "React", img: "react"},
    {name: "Redux", img: "redux"},
    {name: "Next.js", img: "nextjs"},
    {name: "Vue.js", img: "vue"},
    {name: "Nuxt.js", img: "nuxtjs"},
    {name: "Angular", img: "angular"},
    {name: "Jest", img: "jest"},
    {name: "Vite", img: "vite"},
    {name: "Go", img: "go"},
    {name: "Python", img: "py"},
    {name: "Django", img: "django"},
    {name: "Flask", img: "flask"},
    {name: "FastAPI", img: "fastapi"},
    {name: "C#", img: "cs"},
    {name: ".NET", img: "dotnet"},
    {name: "C", img: "c"},
    {name: "C++", img: "cpp"},
    {name: "Java", img: "java"},
    {name: "Spring", img: "spring"},
    {name: "Kotlin", img: "kotlin"},
    {name: "Android Studio", img: "androidstudio"},
    {name: "Rust", img: "rust"},
    {name: "Solidity", img: "solidity"},
    {name: "MongoDB", img: "mongodb"},
    {name: "PostgreSQL", img: "postgres"},
    {name: "MySQL", img: "mysql"},
    {name: "Redis", img: "redis"},
    {name: "SQLite", img: "sqlite"},
    {name: "HTML", img: "html"},
    {name: "CSS", img: "css"},
    {name: "Sass", img: "sass"},
    {name: "Bootstrap", img: "bootstrap"},
    {name: "ReactiveX", img: "reactivex"},
    {name: "Postman", img: "postman"},
    {name: "Docker", img: "docker"},
    {name: "Kubernetes", img: "kubernetes"},
    {name: "Linux", img: "linux"},
    {name: "Bash", img: "bash"},
    {name: "Git", img: "git"},
    {name: "GitHub Actions", img: "githubactions"},
];

const education_en = [
    {
        title: "Google Cibersecurity Professional Certificate",
        institution: "Coursera",
        date: "2023",
        badge: "google-cybersecurity-certificate",
    },
    {
        title: "Google IT Automation with Python Professional Certificate",
        institution: "Coursera",
        date: "2023",
        badge: "google-it-automation-certificate",

    },
    {
        title: "Google Data Analytics Professional Certificate",
        institution: "Coursera",
        date: "2021",
        badge: "google-data-analytics-certificate.2",
    },
]

const app = Vue.createApp({
    data() {
        return {
            message: "Hello, Vue!",
        }
    }
});


app.component('vheader', {
    template: '#vue_header',
    data() {
        return undefined;
    }
});

app.component('vmain', {
    template: '#vue_main'
});

app.component('vfooter', {
    template: '#vue_footer'
});

app.component('education_list', {
    template: '#vue_education_list',
    data() {
        return {
            education: education_en
        }
    }
});


const skill_search = Vue.ref('');
app.component('skill-list', {
    template: '#vue_skill_list',
    data() {
        return {
            skills: skills,
            skill_search: skill_search
        }
    },
    computed: {
        filteredSkills() {
            return skills.filter(skill => skill.name.toLowerCase().includes(skill_search.value.toLowerCase()))
        }
    }
})


app.mount('#app')
