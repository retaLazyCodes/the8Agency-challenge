const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const initialAttendees = [
    {
        name: "Test1",
        lastname: "Test1",
        email: "test@test.com",
        country: "Argentina",
        phone: "1133393090",
        job: "Tester"
    },
    {
        name: "Test2",
        lastname: "Test2",
        email: "test2@test2.com",
        country: "Uruguay",
        phone: "4233393090",
        job: "UX Designer"
    },
    {
        name: "Test3",
        lastname: "Test3",
        email: "test3@test3.com",
        country: "Brasil",
        phone: "5133393090",
        job: "Backend Developer"
    }
]


const getAllCountriesFromAttendees = async () => {
    const response = await api.get('/api/attendees')
    return {
        countries: response.body.map(attendee => attendee.country),
        response
    }
}


module.exports = {
    initialAttendees,
    api,
    getAllCountriesFromAttendees,
}