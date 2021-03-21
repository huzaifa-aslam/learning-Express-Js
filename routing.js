const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('welcome to home page')
})


app.get('/about', (req, res) => {
    res.send('welcome to about page')
})

app.get('/contact', (req, res) => {
    res.send('welcome to contact page')
})

app.get('/logout', (req, res) => {
    res.send('logout page')
})

app.get('/portfolio', (req, res) => {
    res.send('welcome to portfolio page')
})

app.get('*', (req, res) => {
    res.send('Page not found')
})

app.listen(3000, () => {
    console.log("server listing at port 8000");
})