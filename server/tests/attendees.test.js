const mongoose = require('mongoose')
const Attendee = require('../models/Attendee')
const { server } = require('../index')
const {
    initialAttendees,
    api,
    getAllCountriesFromAttendees
} = require('./helpers')


beforeEach(async () => {
    await Attendee.deleteMany({})

    for (const attendee of initialAttendees) {
        const attendeeObject = new Attendee(attendee)
        await attendeeObject.save()
    }
})

describe('GET all attendees', () => {
    test('attendees are returned as json', async () => {
        await api
            .get('/api/attendees')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('there are attendees', async () => {
        const {
            response
        } = await getAllCountriesFromAttendees()
        expect(response.body.results).toHaveLength(initialAttendees.length)
    })

    test('the first attendee is from Argentina', async () => {
        const {
            countries
        } = await getAllCountriesFromAttendees()
        expect(countries[0]).toContain('Argentina')
    })
})


describe('create a attendee', () => {
    test('is possible with a valid attendee', async () => {
        const newAttendee = {
            name: "Lucio",
            lastname: "Hettinger",
            email: "Lucio_Hettinger@annie.ca",
            country: "Brazil",
            phone: "5133393090",
            job: "Frontend Developer"
        }

        await api
            .post('/api/attendees')
            .send(newAttendee)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const { countries, response } = await getAllCountriesFromAttendees()

        expect(response.body.results).toHaveLength(initialAttendees.length + 1)
        expect(countries).toContain(newAttendee.country)
    })

    test('is not possible with an invalid attendee', async () => {
        const newAttendee = {
            name: "Lucio",
            lastname: "Hettinger",
            email: "Lucio_Hettinger@annie.ca",
            country: "Brasil",
            phone: "5133393090"
        }

        await api
            .post('/api/attendees')
            .send(newAttendee)
            .expect(422)

        const response = await api.get('/api/attendees')

        expect(response.body.results).toHaveLength(initialAttendees.length)
    })
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
})