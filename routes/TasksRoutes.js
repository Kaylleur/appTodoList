var express = require('express');
var TasksController = require('../controllers/TasksController');
var router = express.Router();

router.get('/', TasksController.all);
router.post('/', TasksController.add);
router.get('/:id', TasksController.get);
router.put('/:id',TasksController.edit);

module.exports = router;
