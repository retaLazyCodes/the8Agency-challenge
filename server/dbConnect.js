const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/event_db'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('conectado a mongodb'))
    .catch(e => console.log('error de conexión', e))