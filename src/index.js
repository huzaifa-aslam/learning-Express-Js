const express = require('express');
const path = require('path')
const app = express()

const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, './templates')
// app.use(express.static(staticPath));

// template engine

app.set("view engine", "hbs")
app.set('views', templatePath)
app.get('/', (req, res) => {
    res.render("index", {
        firstName: "Huzaifa"
    })
})

app.get('/about', (req, res) => {
    res.render("about", {
        firstName: "Huzaifa"
    })
})

app.get('/', (req, res) => {
    res.send('hello from server')
})

app.listen(3000, () => {
    console.log("server listing at port 3000");
})