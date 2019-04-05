/**
 * Copyright (c) 2017, SinFila.
 * All Right reserved
 *
 * This source is licenced under privative and all copyrights are property of
 * Keos Co
 */
var Is = require('is_js');
var speakeasy = require('speakeasy');
var CryptoJS = require("crypto-js");
//ModelCore
//var MenuModel = require('../models/MenuModel');
//var menuModel = new MenuModel();

var ControllerCore = require('./ControllerCore.js');
/***
 *  Controller
 */
class FormController extends ControllerCore {
  validate(req,res){
    const { name, email, phone, age } = req.body;
    const data = { name, email, phone, age };
    console.log(data);
    var reset = false ;
    var mensaje = [];
    (Is.not.undefined(name) || name !=='' )&& (Is.not.undefined(email) || email !=='' ) && 
    (Is.not.undefined(phone) || phone !=='' ) && (parseInt(age) >= 18 && parseInt(age) <= 100) ?
    (mensaje.push({"mensaje":"Tu información fue enviada con éxito, estaremos en contacto contigo"}),
      reset = true ) 
    :  
      Is.undefined(name) || name === '' ?
        (mensaje.push({"mensaje":"El campo Nombre es requerido"})) : ('');  
      Is.undefined(email) || email === '' ?
            (mensaje.push({"mensaje":"El campo E-mail es requerido"})):('');
      Is.undefined(phone) || phone ==='' ?
            (mensaje.push({"mensaje":"El campo E-mail es requerido"})):('');
      parseInt(age) < 18 ? 
            (mensaje.push({"mensaje":"El campo Edad es no puede ser menor de 18"})):(''); 
      parseInt(age) > 100 ? 
            (mensaje.push({"mensaje":"El campo Edad es no puede ser mayor de 100"})):('');

    res.json({ "mensaje":mensaje, "data": data, "reset":reset });
   }
}
//EXport module
module.exports = FormController;
