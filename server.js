const express = require('express');
const data = require('./data')
const app = express();

app.get('/', (req, res) => {
    res.send(data)
})

app.post('/newItem', (req, res) => {
    res.send(`post added on port ${PORT}`)
})

app.put('/item', (req, res) => {
    res.send(`Changed the file on port ${PORT}`)
})

app.delete('/item', (req, res) => {
    res.send(`removed item on port ${PORT}`)
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));