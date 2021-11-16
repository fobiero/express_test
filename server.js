const express = require('express');
const data = require('./data')
const app = express();

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
        res.send(data)
    })
    // get user in the data 
app.get('/item/:id', (req, res) => {
    console.log(req.params.id);
    let user = Number(req.params.id)
        // console.log(user);
        // console.log(data[user]);
    res.send(data[user])
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

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));