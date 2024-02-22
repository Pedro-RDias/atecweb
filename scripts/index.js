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
        const phraseStore = Vue.reactive({
            index: 0,
            lineLength: 0,
            isPaused: false,
            isWritting: false,
            addLetter () {
                this.lineLength++;
            },
            removeLetter () {
                this.lineLength--;
            },
            resumeAnimation () {
                this.isPaused = false;
            },
            startWritting (n) {
                this.isWritting = true;
                this.index = (this.index + 1) % n;
            },
            stopWritting () {
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
                if (this.phraseStore.lineLength < this.jobTitles[this.phraseStore.index].length) {
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
                    this.phraseStore.startWritting(this.jobTitles.length);
                }
            }


        }, 75);
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
                return this.jobTitles[this.phraseStore.index].slice(0, this.phraseStore.lineLength);
            }
        }
    },
    methods: {
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
