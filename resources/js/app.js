require('./bootstrap');

//	- First import the vue package.
import Vue from 'vue'
//  - Now we import our vue.app file
import App from './vue/app.vue'

// Here we create the Vue front-end application object.
const app = new Vue({
    // create an element with an id of #app
    el: '#app',
    // pass in our app component that we just created
    components: { App }
});
