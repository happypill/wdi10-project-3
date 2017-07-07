/*
 * Rachel's WDI Project 2 Routes folder restaurant.js file
*/
// const express = require('express');
// const restaurantController = require('../controllers/restaurant');
//
// const router = express.Router();
//
// router.get('/', restaurantController.getAll)
//
// module.exports = router

const express = require('express');
const eventController = require('../controllers/event');

const router = express.Router();

router.get('/', eventController.getAll)

module.exports = router
