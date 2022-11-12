import axios from "axios"

export const ServiceInstance=axios.create({
    baseURL:'http://localhost:3001',

})