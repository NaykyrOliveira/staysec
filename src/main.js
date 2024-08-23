import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookOpen, faExclamationTriangle, faShieldAlt, faGlobe, faLock } from '@fortawesome/free-solid-svg-icons'

library.add(faBookOpen, faExclamationTriangle, faShieldAlt, faGlobe, faLock)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
