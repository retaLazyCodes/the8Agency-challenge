const { body, validationResult } = require('express-validator');
const countries = require("./countries")


exports.validationData = [
    body('name')
        .not()
        .isEmpty()
        .withMessage("The name must contain at least 2 characters"),
    body('lastname')
        .not()
        .isEmpty()
        .withMessage("The lastname must contain at least 2 characters"),
    body('email')
        .isEmail()
        .withMessage("The email must be a valid email"),
    body('country')
        .isIn(countries)
        .withMessage('The country must be a Latin American country')
        .isLength({ min: 4 }),
    body('job')
        .not()
        .isEmpty()
        .withMessage("The job must contain at least 2 characters"),
    body('phone')
        .isLength({ min: 10, max: 12 })
        .withMessage('must be at least 10 chars long')
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },

]
