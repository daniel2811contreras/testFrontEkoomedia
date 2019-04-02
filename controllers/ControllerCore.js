/**
 * Copyright (c) 2017, SinFila.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Keos Co
 */
var Is = require('is_js');
//Model
class ControllerCore {
  /*Contructor ini*/
  constructor() {
    //Core contriollers
  }
  /*
  *
  *
  */
  getHour() {
    //Get hour
    var d = new Date();
    var n = d.getDay();

    //Return Date
    return n;
  }
  getStatusToken(req, res, next) {
                                                  
    next();

  }

  // next();
}

module.exports = ControllerCore;
