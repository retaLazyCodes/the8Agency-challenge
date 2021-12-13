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
        expect(response.body).toHaveLength(initialAttendees.length)
    })

    test('the first attendee is from Argentina', async () => {
        const {
            countries
        } = await getAllCountriesFromAttendees()
        expect(countries[0]).toContain('Argentina')
    })
})


afterAll(() => {
    mongoose.connection.close()
    server.close()
})