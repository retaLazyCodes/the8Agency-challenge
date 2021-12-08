const { Schema, model } = require('mongoose')

const attendeeSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    country: String,
    phone: String,
    job: String
})


const Attendee = model('Attendee', attendeeSchema)

module.exports = Attendee