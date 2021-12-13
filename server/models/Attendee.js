const { Schema, model } = require('mongoose')

const attendeeSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    country: String,
    phone: String,
    job: String
})

attendeeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})


const Attendee = model('Attendee', attendeeSchema)

module.exports = Attendee