const express = require('express');
const router = express.Router();
const destinosController = require('../controllers/destino.controller');

router.get('/', destinosController.index)


module.exports=router;