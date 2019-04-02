
/**
 * Copyright (c) 2017, SinFila.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Keos Co
 */
var express = require('express');
var router = express.Router();
var Form = require('../controllers/FormController');


// define object
var form = new Form();

//Routers
router.post('/validate', form.validate);


module.exports = router;
