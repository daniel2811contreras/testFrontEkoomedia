var ControllerCore = require('./ControllerCore.js');
/***
 *  Controller
 */
class MenuController extends ControllerCore {
  constructor() {
    super()
  }
  list(req , res){
    res.json({
        "data":[
          {"id": "1", "name": "Boeign"},
          {"id": "2", "name": "Airbus"}
        ]
    });
  }
}
//EXport module
module.exports = MenuController;
