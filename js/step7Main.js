    Vue.component("nobosaur-message",{
    props:["title", "body"],
    data() {
        return {
            isVisible: true
        };
    },
    template: `
        <article class="message">
            <div class="message-header">
                <p>{{ title }}</p>
                <button class="close" @click="hideModal"></button>
            </div>
            <div class="message-body" v-show="isVisible">
                {{ body }}
            </div>
        </article>
    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

new Vue({
    el: "#root"
});