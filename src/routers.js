import About from './views/About.vue'
import Contact from './views/Contact.vue'

const routers = [
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
]

export default routers
