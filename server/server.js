const express = require('express')
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
app.use(cors())

app.use(express.json())
mongoose.connect('mongodb+srv://eknsh:1234@cluster0.cukcdgz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
    console.log('successful');
})
const Schema = mongoose.Schema({
    eventname: { type: String, required: true },
    banner: { type: String, required: true },
    shortdesc: { type: String, required: true },
    text: { type: String, required: true },
    price: { type: String, required: true },
    language: { type: String, required: true },
    duration: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: String, required: true }

},
    { collection: 'event' })


const Data = mongoose.model('Data', Schema)
app.get("/api/data", async (req, res) => {
    try {
        const result = await Data.find()

        res.json({ success: true, data: result })


    } catch (error) {

    }
})

app.post("/api/data", async (req, res) => {
    try {
        await Data.create({
            eventname: req.body.eventname,
            banner: req.body.banner,
            shortdesc: req.body.shortdesc,
            text: req.body.text,
            price: req.body.price,
            language: req.body.language,
            duration: req.body.duration,
            link: req.body.link,
            date: req.body.date,
        })
        res.json({
            status: 'ok'
        })
    } catch (error) {
        console.log(error);
    }
})

app.listen('8000', () => {
    console.log('8000');
})