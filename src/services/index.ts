import axios from 'axios'

export const httpClient = axios.create({
    baseURL: 'https://strapi-api-ux.herokuapp.com'
})
