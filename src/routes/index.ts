import Dashboard from "@/views/pages/Dashboard.vue";
import Patient from "@/views/pages/Patient.vue";
import CreateUser from "@/views/pages/users/CreateUser.vue";
import DetailsUser from "@/views/pages/users/DetailsUser.vue";
import ManageUser from "@/views/pages/users/ManageUser.vue";
import { createRouter, createWebHistory } from "vue-router";


const myRouter =createRouter({
    history:createWebHistory(),
    routes:[
        {path:('/'), component:Dashboard},
        {path:('/paitent'), component:Patient},
        {path:('/manageUser'), component:ManageUser},
        {path:('/createUser'),component:CreateUser},
        {path:('/DetailsUser'),component:DetailsUser},
    ]
});
export default myRouter;