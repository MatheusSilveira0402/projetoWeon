import Vue from "vue";
import axios from "axios";



Vue.use ({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'http://52.66.40.75/box_c4bdf6bbf9b494d9be37'
        })
    }
})