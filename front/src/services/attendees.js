import axios from 'axios'
import { API_URL } from './settings'


const getAll = () => {
    const request = axios.get(API_URL)
    return request.then(response => response.data)
}

const create = attendee => {
    const request = axios.post(API_URL, attendee)
    return request.then(response => response.data)
}


export const attendeesService = {
    getAll, create
}

