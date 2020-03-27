export default {
    //props: ["user"],

    props: {
        user: {
            username: String
        }
    },

    name: "HomePage",

    template: `
    <section>
        <h3>Welcome home {{ user.username }}!</h3>
    </section>
    `
}