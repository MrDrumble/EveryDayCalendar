Vue.component('month', {
    props: ['name','days'],
    template: '<li class="feat"><h1 tabindex="1">{{name}}</h1><div>{{text}}</div></li>'
})




const app = new Vue({
    el:'#app',
    data: {
        months: [
            { num: 0, name: 'Jan', days: 31, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 1, name: 'Feb', days: 28, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 2, name: 'Mar', days: 31, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 3, name: 'Apr', days: 30, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 4, name: 'May', days: 31, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 5, name: 'Jun', days: 30, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 6, name: 'Jul', days: 31, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 7, name: 'Aug', days: 31, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 8, name: 'Sep', days: 30, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 9, name: 'Oct', days: 31, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 10, name: 'Nov', days: 30, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
            { num: 11, name: 'Dec', days: 31, done: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] }
        ]
    },
    mounted() {
        if(typeof localStorage.savedData !== 'undefined') this.months = JSON.parse(localStorage.getItem("savedData"));
    },
    methods: {
        getDone: function(m,d){
            return this.months[m].done[d];
        },
        setDone: function(m,d){
            if(this.months[m].done[d]){Vue.set(app.months[m].done, d, 0);}
            else{Vue.set(app.months[m].done, d, 1);}

            localStorage.setItem("savedData", JSON.stringify(this.months));
        }
    }
});