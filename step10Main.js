window.Event = new Vue();

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