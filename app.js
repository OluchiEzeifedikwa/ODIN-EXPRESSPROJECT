
const path = require('path');
const express = require ('express');
const app = express();
require("dotenv").config();
const dotenv = require("dotenv").config();


// set up static files to serve html file by using a middleware
app.use(express.static(path.join(__dirname, 'public')));




// serve html files
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));

// });

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'contact.html'));

// });

// serve data
// app.get('/contact', (req, res) => res.sendFile('Hello World'));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first express app listening at PORT ${PORT}` )
})



