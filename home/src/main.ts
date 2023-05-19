import { createApp } from 'vue'
import './style.css'
import Home from './Home.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faItchIo);

createApp(Home).component('font-awesome-icon', FontAwesomeIcon).mount('#home')
