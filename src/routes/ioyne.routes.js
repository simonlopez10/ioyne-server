// Create and configure backend routes

const { Router } = require('express');
const router = Router();

//clients controllers
const { 
  createClient,
  getAllClients
 } = require('../controllers/clients.controllers')

//db controllers
//const { } = require('../controllers/db.controllers')  

//products controllers
//const { } = require('../controllers/products.controllers')

//quotations controllers
//const { } = require('../controllers/quotations.controllers')

//users controllers
//const { } = require('../controllers/users.controllers')


// CLIENTS ROUTES

// create a client
router.post('/clients', createClient)
// get all clients
router.get('/clients', getAllClients)

// DB ROUTES

// PRODUCTS ROUTES

// QUOTATIONS EOUTES

// USERS ROUTES


console.log()  

module.exports = router;