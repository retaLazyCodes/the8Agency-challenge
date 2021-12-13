const mongoose = require('mongoose');
const Attendee = require('../models/Attendee');

const {
    NODE_ENV,
    MONGO_DB_URI,
    MONGO_DB_URI_TEST,
    MONGO_DB_URI_DEV
} = process.env

const connectionString = NODE_ENV === 'test'
    ? MONGO_DB_URI_TEST
    : (
        NODE_ENV === 'production'
            ? MONGO_DB_URI
            : MONGO_DB_URI_DEV
    )

// conexión a mongodb
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error('Error trying connect to Database\n', err)
    })

process.on('uncaughtException', () => {
    mongoose.connection.close(function () {
        process.exit(0);
    });
})


const db = mongoose.connection
db.once('open', async () => {
    if (await Attendee.countDocuments().exec() > 0) return

    Promise.all([
        Attendee.create({ name: 'Juan', lastname: 'Gabriel', email: 'jg@jg.com', country: 'Chile', phone: '177073680315', job: 'Tester' }),
        Attendee.create({ name: 'Pedro', lastname: 'Pascal', email: 'pp@pp.com', country: 'Bolivia', phone: '546076480365', job: 'DBA' }),
        Attendee.create({ name: 'Julian', lastname: 'Duque', email: 'jd@jd.com', country: 'Colombia', phone: '166073680315', job: 'Backend Dev' }),
        Attendee.create({ name: 'Ana', lastname: 'Suarez', email: 'as@as.com', country: 'Venezuela', phone: '543073680315', job: 'Front Dev' }),
        Attendee.create({ name: 'Jesica', lastname: 'Altamirano', email: 'ja@ja.com', country: 'Guatemala', phone: '345073680315', job: 'UX Designer' }),
        Attendee.create({ name: 'Patricia', lastname: 'Perez', email: 'patop@patop.com', country: 'Argentina', phone: '34573680315', job: 'Recruiter' }),
        Attendee.create({ name: 'Gaston', lastname: 'Ramirez', email: 'gr@gr.com', country: 'Uruguay', phone: '546073680315', job: 'Fullstack Dev' }),
        Attendee.create({ name: 'Pablo', lastname: 'Valdez', email: 'pv@pv.com', country: 'Chile', phone: '346073680315', job: 'Recruiter' }),
        Attendee.create({ name: 'Maria', lastname: 'Herrera', email: 'mh@mh.com', country: 'Ecuador', phone: '324573680315', job: 'Data Analyst' }),
        Attendee.create({ name: 'Gabriela', lastname: 'Sanchez', email: 'gs@gs.com', country: 'Argentina', phone: '127073680315', job: 'Recruiter' }),
        Attendee.create({ name: 'Rodolfo', lastname: 'Vega', email: 'rv@rv.com', country: 'Mexico', phone: '657073680315', job: 'CTO' }),
        Attendee.create({ name: 'David', lastname: 'Santos', email: 'ds@ds.com', country: 'Brasil', phone: '789673680315', job: 'Backend Dev' })
    ]).then(() => console.log('Added Attendees'))
})