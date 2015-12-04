var Task = require('../models/Task');

module.exports = {
    all: function(req, res) {
        Task.all(function(err, tasks) {
            res.send(tasks);
        });
    },
    get: function(req, res) {
        var id = req.params.id;
        Task.get(id, function(err, task) {
            if (err) {
                res.send({ err: err});
            }
            res.send(task);
        });
    },
    add: function(req, res) {
        var task = req.body;
        Task.add(task, function(err, task) {
            if (err) {
                res.send({ err: err});
            }
            res.send(task);
        });
    },
    edit: function(req, res) {
        var task = req.body;
        Task.edit(req.params.id,task, function(err, task) {
            if (err) {
                res.send({ err: err});
            }
            res.send(task);
        });
    }
};
