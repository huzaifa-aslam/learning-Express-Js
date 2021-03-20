const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('hello from server')
})

app.listen(8000, () => {
    console.log("server listing at port 8000");
})