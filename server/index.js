require("./config/dbConnect")
const express = require("express")
const app = express()
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.options('*', cors());


const PORT = 3001

app.use("/", require("./routes/attendees.routes"))

app.listen(PORT, () => {
    console.log(`ejecutando en el puerto ${PORT}`)
})