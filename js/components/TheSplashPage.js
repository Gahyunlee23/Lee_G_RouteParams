export default {
    name: "SplashPage",
    
    template: `
        <h3>Welcome to my super awesome app!</h3>
    `,

    created: function() {
        setTimeout(() => this.navtohome(), 1500);
    },

    methods: {
        navtohome() {
            this.$router.push({ name: "home", params: { user: { username: "Foo" } } });
        }
    }
}