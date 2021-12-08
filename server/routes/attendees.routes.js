const express = require("express");
const router = express.Router()
const Attendee = require("../models/Attendee");

router.get("/attendees", async (req, res, next) => {
    try {
        const attendees = await Attendee.find()
        res.status(200).json(attendees)
    } catch (err) {
        next(err)
    }
})

router.post("/attendees", async (req, res, next) => {
    console.log(req.body)
    const { name, lastname, email, country, phone, job } = req.body;

    const newAttendee = new Attendee({
        name,
        lastname,
        email,
        country,
        phone,
        job
    })

    try {
        const savedAttendee = await newAttendee.save()

        res.status(201).json(savedAttendee)
    } catch (error) {
        next(error)
    }
})

module.exports = router;
