var should = require('should');

var Task = require('../models/Task');
var TasksController = require('../controllers/TasksController');

var testTask = null;

describe("Task DB", function() {
    it("should add a task", function(done) {
        Task.add({ name: "OK" }, function(err, task) {
            should.not.exists(err);
            should.exists(task);

            task.should.have.property('id');
            task.id.should.be.eql(0);
            task.name.should.be.eql("OK");

            testTask = task.id;
            done();
        });
    });

    it("should not add a task", function(done) {
        Task.add({ bla: "OK" }, function(err, task) {
            should.exists(err);
            should.not.exists(task);

            done();
        });
    });

    it("should retrieve tasks", function(done) {
        Task.all(function(err, tasks) {
            should.not.exists(err);
            should.exists(tasks);

            tasks.length.should.be.eql(1);
            tasks[0].id.should.be.eql(0);
            tasks[0].name.should.be.eql("OK");
            done();
        });
    });

    it("should delete the task", function(done) {
        Task.remove(testTask, function(err) {
            should.not.exists(err);
            done();
        });
    });
});
