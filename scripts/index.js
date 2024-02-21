const app = Vue.createApp({
    data() {
        return {
            message: "Hello, Vue!",
        }
    }
});

// Header Components
app.component('vnavbar', {
    template: '#vue_navbar',
});

// Main Components
app.component('vbanner', {
    template: '#vue_banner',
    setup() {
        const index = Vue.ref(0);
        const lineLength = Vue.ref(0);
        const settings  = Vue.ref({
            isWritting: true,
            isPaused: false
        });
        const isPaused = Vue.ref(false);
        return {
            index,
            lineLength,
            settings,
            isPaused
        }
    },
    created() {
        let timeRef;
        let timeRef2;
        timeRef = setInterval(() => {
            if (!this.isPaused){
                if (this.line.length <= this.catch_phrases[this.index].length && this.isWritting) {
                    this.addLetter();
                } else if (this.line.length === this.catch_phrases[this.index].length && this.isWritting) {
                    this.pauseAnimation();
                    timeRef2 = setTimeout(() => {
                        this.resumeAnimantion();
                    }, 1500);
                } else if (this.line.length > 0 && !this.isWritting) {
                    this.removeLetter();
                }
            // else if (this.line.length >=0 && !this.isWritting) {
            //     this.lineLength--;
            // } else if (this.line.length === 0 && !this.isWritting) {
            //     this.write = true;
            //     this.isPaused = true;
            //     setTimeout(() => {
            //         this.index = (this.index + 1) % this.catch_phrases.length;
            //         this.isPaused = false;
            //     }, 1500);
            // } else this.write = false;
            }
            console.log(this.lineLength, this.isWritting, this.isPaused);
        }, 70);
        return () => clearInterval(timeRef);
    },
    data() {
        return {
            ...banner_en
        }
    },
    computed: {
        line: {
            get() {
                return this.catch_phrases[this.index].slice(0, this.lineLength) + '|';
            }
        }
    },
    methods: {
        nextPhrase() {
            this.index = (this.index + 1) % this.catch_phrases.length;
        },
        pauseAnimation() {
            this.settings.isPaused = true;
            this.settings.isWritting = false;
        },
        resumeAnimantion() {
            this.settings.isPaused = false;
        },
        startWritting() {
            this.settings.isWritting = true;
        },
        addLetter() {
            this.lineLength++;
        },
        removeLetter() {
            this.lineLength--;
        }

    }
});

app.component('vabout', {
    template: '#vue_about',
    data() {
        return {
            ...about_en
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
    }
});


app.component('skill-list', {
    template: '#vue_skill_list',
    setup() {
        const skill_search = Vue.ref('');
        return {
            skill_search
        }
    },
    data() {
        return {
            ...skills_en,
        }
    },
    computed: {
        filteredSkills: {
            get() {
                return skills.filter(skill => skill.name.toLowerCase().includes(this.skill_search.toLowerCase())).slice(0, 6);
            }
        }

    }
});

app.component('language_list',{
    template: '#vue_language_list',
    data() {
        return {
            ...languages_en,
        }
    }

})

app.component('interests_list', {
    template: '#vue_interests_list',
    data() {
        return {
            ...interests_en,
        }
    }
});

app.component('hobbies_list', {
    template: '#vue_hobbies_list',
    data() {
        return {
            ...hobbies_en,
        }
    }
});
// .About Components

app.component('vportfolio', {
    template: '#vue_portfolio',
    data() {
        return {
            ...portfolio_en
        }
    }
});

app.component('vcontact', {
    template: '#vue_contact',
    data() {
        return {
            ...contact_en
        }
    }
});


app.mount('#app')
