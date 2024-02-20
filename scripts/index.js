const app = Vue.createApp({
    data() {
        return {
            message: "Hello, Vue!",
        }
    }
});


app.component('vheader', {
    template: '#vue_header',
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
});

app.component('interests_list', {
    template: '#vue_interests_list',
    data() {
        return {
            interests: interests_en
        }
    }
});

app.component('hobbies_list', {
    template: '#vue_hobbies_list',
    data() {
        return {
            hobbies: hobbies_en
        }
    }
});


app.mount('#app')
