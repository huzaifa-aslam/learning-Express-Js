const express = require('express');
const path = require('path')
const hbs = require('hbs')
const app = express()

const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, './templates/views')
const partialPath = path.join(__dirname, './templates/partials')
// app.use(express.static(staticPath));

// template engine

app.set("view engine", "hbs")
app.set('views', templatePath)
hbs.registerPartials(partialPath)
app.get('/', (req, res) => {
    res.render("index", {
        firstName: "Huzaifa"
    })
})



app.get('/', (req, res) => {
    res.send('hello from server')
})

app.get('/about', (req, res) => {
    res.render("about", {
        firstName: "Huzaifa"
    })
})

app.get('/about/*', (req, res) => {
    res.render("404", {
        someText: "this about page not found"
    })
})

app.get('*', (req, res) => {
    res.render("404", {
        someText: "Page not found"
    })
})

app.listen(3000, () => {
    console.log("server listing at port 3000");
})