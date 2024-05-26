import { ref } from 'vue'
export default {
    setup() {
        const msg = ref('my msg')
        return { msg }
    },
    template: `
        <h1>{{ msg }}</h1>
    `
}