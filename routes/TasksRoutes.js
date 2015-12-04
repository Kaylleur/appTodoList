var express = require('express');
var TasksController = require('../controllers/TasksController');
var router = express.Router();

router.get('/', TasksController.all);
router.post('/', TasksController.post);
router.get('/:id', TasksController.get);

module.exports = router;
