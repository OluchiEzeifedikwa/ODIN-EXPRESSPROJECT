

const express = require ('express');
const logger = require('./middleware/logger');
const path = require('path');
const app = express();
// require("dotenv").config();
// const dotenv = require("dotenv").config();


// init middleware
// app.use(logger);



// Gets all members
// app.get('/api/members', (req, res) => 
//     res.json(members));

// // Get a single member
// app.get('/api/members/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id));

//     if (found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id)));

//     } else{
//         res.status(400).json({msg: `No member with the id of ${req.params.id}`});
//     }
    
// });

// set up static files to serve html file by using a middleware
app.use(express.static(path.join(__dirname, 'public')));

// members api route
app.use('/api/members', require('./routes/api/membersroute'))

// module.exports = members;

// Create members API
// app.use('./api/members', require('./routes/api/members'));

// serve json data







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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`My first express app listening at PORT ${PORT}` )
})



