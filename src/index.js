const express = require('express');
const morgan = require('morgan');
const ioyneRouter = require('./routes/ioyne.routes')


// starting the server with express in "app" variable
const app = express();

// allows http request on terminal  
app.use(morgan('dev'));

// Use routes of ioyne
app.use(ioyneRouter)

// starting the server on port 4000
app.listen(4000);
console.log('server on port 4000') 

