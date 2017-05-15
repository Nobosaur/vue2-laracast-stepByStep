// This is normal way using Vue default
window.Event = new Vue();

//Building own API
/*window.Event = new class {
    constructor () {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event,data);
    }
    
    listen(event, callback) {
        this.vue.$on(event,callback);
    }
}*/

Vue.component("nk-coupon", {
    template: `
        <input placeholder="Enter your coupon" @blur="onCouponApplied"></input>
    `,

    methods: {
        onCouponApplied(){
            Event.$emit("coupon-was-applied");
        }
    }    
})

new Vue({
    el: "#root",

    data: {
        couponApplied: false
    },

    created() {
        Event.$on("coupon-was-applied", () => alert("listening"))
    }
});