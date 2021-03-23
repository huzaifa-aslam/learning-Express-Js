const express = require('express');
const path = require('path')
const app = express()

const staticPath = path.join(__dirname, '../public')
// app.use(express.static(staticPath));

// template engine

app.set("view engine", "hbs")
app.get('', (req, res) => {
    res.render("index", {
        firstName: "Huzaifa"
    })
})

app.get('/', (req, res) => {
    res.send('hello from server')
})

app.listen(3000, () => {
    console.log("server listing at port 3000");
})