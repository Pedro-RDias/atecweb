const language = Vue.reactive(
    {
        current: 'en',
        available: ['en', 'pt'],
        changeLanguage(lang) {
            console.log(lang);
            if (this.available.includes(lang) && lang !== this.current) {
                this.current = lang;
            }
        }
    }
)

const app = Vue.createApp();

// Header Components
const navOffset = 50;
app.component('vnavbar', {
    template: '#vue_navbar',
    setup() {
        const showBackround = Vue.reactive({
            show: false,
            toggleShow() {
                this.show = window.scrollY >= window.innerHeight - navOffset;
            }
        })
        return {
            showBackround,
            language
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Any code to be executed when the window is scrolled
            if (
                window.scrollY > window.innerHeight - navOffset && !this.showBackround.show
                || window.scrollY < window.innerHeight - navOffset && this.showBackround.show
            ) this.showBackround.toggleShow();
        }
    },
    computed: {
        backgroundStyle: {
            get() {
                return this.showBackround.show ? 'border-bottom border-body bg-body-tertiary' : '';
            }
        },
        themeStyle: {
            get() {
                return this.showBackround.show ? '' : 'dark';
            }
        },
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return navbar_pt_pt;
                    case 'en':
                    default:
                        return navbar_en;
                }
            }
        }
    }
});

// Main Components
app.component('vbanner', {
    template: '#vue_banner',
    setup() {
        const phraseStore = Vue.reactive({
            index: 0,
            lineLength: 0,
            isPaused: false,
            isWritting: false,
            addLetter() {
                this.lineLength++;
            },
            removeLetter() {
                this.lineLength--;
            },
            resumeAnimation() {
                this.isPaused = false;
            },
            startWritting(n) {
                this.isWritting = true;
                this.index = (this.index + 1) % n;
            },
            stopWritting() {
                this.isWritting = false;
                this.isPaused = true;
            },
        })
        return {
            phraseStore
        }
    },
    created() {
        let timeRef;
        timeRef = setInterval(() => {
            if (this.phraseStore.isPaused) return;
            if (this.phraseStore.isWritting) {
                if (this.phraseStore.lineLength < this.info.jobTitles[this.phraseStore.index].length) {
                    this.phraseStore.addLetter();
                } else {
                    this.phraseStore.stopWritting();
                    setTimeout(() => {
                        this.phraseStore.resumeAnimation();
                    }, 2000);
                }
            } else {
                if (this.phraseStore.lineLength > 0) {
                    this.phraseStore.removeLetter();
                } else {
                    this.phraseStore.startWritting(this.info.jobTitles.length);
                }
            }


        }, 50);
        return () => clearInterval(timeRef);
    },
    computed: {
        line: {
            get() {
                return this.info.jobTitles[this.phraseStore.index].slice(0, this.phraseStore.lineLength);
            },
        },
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return banner_pt_pt;
                    case 'en':
                    default:
                        return banner_en;
                }
            }
        }
    },
});

app.component('vabout', {
    template: '#vue_about',
    computed: {
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return about_pt_pt;
                    case 'en':
                    default:
                        return about_en;
                }

            }
        }
    }
});

// About Components
app.component('vfooter', {
    template: '#vue_footer'
});

app.component('certification_list', {
    template: '#vue_certification_list',
    data() {
        return {
            ...certification_en
        }
    },
    computed: {
        certTotal: {
            get() {
                return this.certifications.length;
            }
        }
    }
});

// Components
app.component('skill-list', {
    template: '#vue_skill_list',
    setup() {
        const skill_search = Vue.ref('');
        return {
            skill_search,
            language,
        }
    },
    computed: {
        filteredSkills: {
            get() {
                const s = skills.filter(skill => {
                    if (this.skill_search === '') return true;
                    else if (skill.name.toLowerCase().includes(this.skill_search.toLowerCase())) return true;
                    else return skill.tags.some(keyword => keyword.toLowerCase().includes(this.skill_search.toLowerCase()));
                });

                return s.length > 0 ? s.slice(0, 12) : this.skills.slice(0, 12);
            }
        },
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return skills_pt_pt;
                    case 'en':
                    default:
                        return skills_en;
                }

            }
        },

    }
});

app.component('language_list', {
    template: '#vue_language_list',
    computed: {
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return languages_pt_pt;
                    case 'en':
                    default:
                        return languages_en;
                }
            },
        }
    },

});

app.component('interests_list', {
    template: '#vue_interests_list',
    computed: {
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return interests_pt_pt;
                    case 'en':
                    default:
                        return interests_en;
                }
            },
        },
    },
});

app.component('hobbies_list', {
    template: '#vue_hobbies_list',
    computed: {
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return hobbies_pt_pt;
                    case 'en':
                    default:
                        return hobbies_en;
                }
            },
        },
    },
});
// .About Components

app.component('vportfolio', {
    template: '#vue_portfolio',
    computed: {
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return portfolio_pt_pt;
                    case 'en':
                    default:
                        return portfolio_en;
                }
            },
        }
    }
});

app.component('vcontact', {
    template: '#vue_contact',
    computed: {
        info: {
            get() {
                switch (language.current) {
                    case 'pt':
                        return contact_pt_pt;
                    case 'en':
                    default:
                        return contact_en;
                }
            },

        }
    },
    methods: {
        validateForm() {
            document.querySelectorAll('.needs-validation').forEach(form => form.classList.add('was-validated'));
        },
        submitForm(event) {
            event.preventDefault();
            this.validateForm(event);
            if (event.target.checkValidity()) {
                const form = event.target;
                document.querySelectorAll('.needs-validation').forEach(form => form.classList.remove('was-validated'));
                form.reset();
                bootstrap.Toast.getOrCreateInstance(document.getElementById('contact-toast')).show();
            }
        },
    }
});

app.mount('#app')

// Enable Bootstrap Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
