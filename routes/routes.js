const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/fox1', controller.fox1);
router.get('/fox2', controller.fox2);

router.post('/score/:foxId', controller.score);

module.exports = router;
