const express = require("express");
const router = express.Router()
const Attendee = require("../models/Attendee");
const { validationData } = require("../middleware/validators/validationData");
const paginatedResults = require("../middleware/paginatedResults");


/**
 * @desc    - get all Attendees
 * @method  - GET
 */
router.get("/", paginatedResults(Attendee),
    async (req, res, next) => {
        try {
            res.status(200).json(res.paginatedResults)
        } catch (err) {
            next(err)
        }
    })


/**
 * @desc    - create new Attendee
 * @method  - POST
 */
router.post("/", validationData,
    async (req, res, next) => {
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
