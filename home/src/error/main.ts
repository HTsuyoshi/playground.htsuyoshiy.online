import { createApp } from 'vue'
import '../style.css'
import Error from './Error.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faItchIo);

createApp(Error).component('font-awesome-icon', FontAwesomeIcon).mount('#home')
