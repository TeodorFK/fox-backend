const router = require('express').Router();
const controller = require('../controller/controller');

//Returnerer en tilfeldig fox
router.get('/fox1', controller.fox1);
router.get('/fox2', controller.fox2);


////øker scoren til en fox via foxId
router.post('/score/:foxId', controller.score);

module.exports = router;
