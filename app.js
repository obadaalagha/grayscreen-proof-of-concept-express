const express = require('express');
// const ejsMate = require('ejs-mate');
// const methodOverride = require('method-override');

const app = express();
const port = 4000;

// Import Routes


// Use Routes


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.all('*', (req, res, next) => {
    res.send('Error 404 not found')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})