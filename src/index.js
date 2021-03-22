const express = require('express');
const path = require('path')
const app = express()
const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath));


app.get('/', (req, res) => {
    res.send('hello from server')
})

app.listen(8000, () => {
    console.log("server listing at port 8000");
})