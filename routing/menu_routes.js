
/**
 * Copyright (c) 2017, SinFila.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Keos Co
 */
var express = require('express');
var router = express.Router();
var Menu = require('../controllers/MenuController');


// define object
var Menu = new Menu();

//Routers
router.get('/', Menu.list);


module.exports = router;
