import axios from 'axios'
import { API_URL } from './settings'

const baseUrl = `${API_URL}/attendees`


const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = attendee => {
    const request = axios.post(baseUrl, attendee)
    return request.then(response => response.data)
}


export const attendeesService = {
    getAll, create
}

