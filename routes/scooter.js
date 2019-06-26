var express = require('express');
var router = express.Router();

// Require controller modules.
var indexController = require('../api/controllers/indexController');
var scooterController = require('../api/controllers/scooterController');

/// Scooter ROUTES ///

// GET index home page.
router.get('/', indexController.index);

// GET scooters
router.get('/api/scooter', scooterController.getScooterResponse);

module.exports = router;