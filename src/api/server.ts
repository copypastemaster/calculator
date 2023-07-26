const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
    console.log('App\'s running on port 3000')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve("../routes/+page.svelte"), { root: __dirname});
})

app.post('/api', (req, res) => {
    console.log(req.body);
})