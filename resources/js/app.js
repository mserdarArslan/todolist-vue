require('./bootstrap');

//	- First import the vue package.
import Vue from 'vue'
//  - Now we import our vue.app file
import App from './vue/app.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Here we create the Vue front-end application object.
const app = new Vue({
    // create an element with an id of #app
    el: '#app',
    // pass in our app component that we just created
    components: { App }
});
