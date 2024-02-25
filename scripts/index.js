const language = Vue.reactive(
    {
        current: 'en',
        available: ['en', 'pt'],
        changeLanguage(lang) {
            if (this.available.includes(lang) && lang !== this.current) {
                this.current = lang;
            }
        }
    }
)

const getLanguage = (lang) => {
    switch (lang) {
        case 'pt':
            return {
                navbar: navbar_pt_pt,
                banner: banner_pt_pt,
                about: about_pt_pt,
                skills: skills_pt_pt,
                languages: languages_pt_pt,
                interests: interests_pt_pt,
                hobbies: hobbies_pt_pt,
                portfolio: portfolio_pt_pt,
                contact: contact_pt_pt,
                timeline_banner: resume_banner_pt_pt,
                timeline: timeline_pt_pt,
                timelineLabels: timelineLabels_pt_pt


            };
        case 'en':
        default:
            return {
                navbar: navbar_en,
                banner: banner_en,
                about: about_en,
                skills: skills_en,
                languages: languages_en,
                interests: interests_en,
                hobbies: hobbies_en,
                portfolio: portfolio_en,
                contact: contact_en,
                timeline_banner: resume_banner_en,
                timeline: timeline_en,
                timelineLabels: timelineLabels_en
            };
    }
}

const getTimeRange = (start, end) => {
    if (!start || !end) return '';
    if (Object.prototype.toString.call(start) !== '[object Date]' || Object.prototype.toString.call(end) !== '[object Date]') return '';
    const startDate = start.getMonth() + 1 + '/' + start.getFullYear();
    const endDate = end.getFullYear() === new Date().getFullYear() ? 'Present' : end.getMonth() + 1 + '/' + end.getFullYear();
    return `${startDate} - ${endDate}`;
};

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
        themeStyle() {
            return this.showBackround.show ? '' : 'dark';
        },
        info() {
            return getLanguage(language.current).navbar;
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
        line() {
            return this.info.jobTitles[this.phraseStore.index].slice(0, this.phraseStore.lineLength);
        },
        info() {
            return getLanguage(language.current).banner;
        }
    },
});

app.component('vabout', {
    template: '#vue_about',
    computed: {
        info() {
            return getLanguage(language.current).about;
        }
    }
});

// About Components
app.component('certification_list', {
    template: '#vue_certification_list',
    data() {
        return {
            ...certification_en
        }
    },
    computed: {
        certTotal() {
            return this.certifications.length;
        },
    },
});

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
        filteredSkills() {
            const s = skills.filter(skill => {
                if (this.skill_search === '') return true;
                else if (skill.name.toLowerCase().includes(this.skill_search.toLowerCase())) return true;
                else return skill.tags.some(keyword => keyword.toLowerCase().includes(this.skill_search.toLowerCase()));
            });

            return s.length > 0 ? s.slice(0, 12) : this.skills.slice(0, 12);

        },
        info() {
            return getLanguage(language.current).skills;
        },

    }
});

app.component('language_list', {
    template: '#vue_language_list',
    computed: {
        info() {
            return getLanguage(language.current).languages;
        }
    },

});

app.component('interests_list', {
    template: '#vue_interests_list',
    computed: {
        info() {
            return getLanguage(language.current).interests;
        },
    },
});

app.component('hobbies_list', {
    template: '#vue_hobbies_list',
    computed: {
        info() {
            return getLanguage(language.current).hobbies;
        }
    },
});
// .About Components

app.component('vportfolio', {
    template: '#vue_portfolio',
    computed: {
        info() {
            return getLanguage(language.current).portfolio;
        }
    }
});

// Footer Components
app.component('vcontact', {
    template: '#vue_contact',
    computed: {
        info() {
            return getLanguage(language.current).contact;
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

/***********************
 Resume Components
 ***********************/

app.component('vresumebanner', {
    template: '#vue_resume_banner',
    computed: {

        info() {
            return getLanguage(language.current).timeline_banner;

        }
    }
});

app.component('vtimeline', {
    template: '#vue_timeline',
    computed: {
        info() {
            return getLanguage(language.current).timeline;
        },
        labels() {
            return getLanguage(language.current).timelineLabels;
        }
    },
    methods: {
        getExperienceLinks(y) {
            return this.info
                .reduce((acc, year) => {
                    return [...acc, ...year.items]
                }, [])
                .filter(item => {
                    if (item.type !== 'professional') return false;
                    console.log(item);
                    const startDate = new Date(item.startDate).getFullYear();
                    const endDate = new Date(item.endDate).getFullYear();
                    return startDate <= y && endDate > y;
                })
        },
    }

});


app.component('vcolapse', {
    template: '#vue_colapse',
    props: ['item', 'linkid'],
    setup() {
        const bsCollapse = Vue.reactive({
            collapse: null,
            toggleCollapse() {
                this.collapse.toggle();
            }
        });
        return {
            bsCollapse
        }
    },
    mounted() {
        this.bsCollapse.collapse = new bootstrap.Collapse(`#collapse_${this.linkid}`, {toggle: false});
    },
    methods: {
        toogleCollapse(id) {
            this.bsCollapse.toggleCollapse();
        }
    },
    computed: {
        info() {
            return getLanguage(language.current).timelineLabels;
        },
        dateRange() {

            if (this.item.type === 'certification' && this.item.completionDate) return this.item.completionDate.getFullYear();
            else if(this.item.startDate && this.item.endDate) return getTimeRange(this.item.startDate, this.item.endDate);
            return "";
        }
    }
});


app.mount('#app')

// Enable Bootstrap Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
