const { Schema, model } = require('mongoose')

const webinarSchema = new Schema({
    title: String,
    description: String,
    date: Date,
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'Attendee'
    }]
})


const Webinar = model('Webinar', webinarSchema)

module.exports = Webinar