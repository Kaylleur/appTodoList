var _ = require('lodash');
var tasks = [];

module.exports = {
    all: function(callback) {
        callback(null, tasks);
    },
    get: function(id, callback) {
        if (tasks[id]) {
            callback(null, tasks[id]);
        } else {
            callback("Not Found");
        }
    },
    add: function(task, callback) {
        if (task.name) {
            task.id = tasks.length;
            tasks.push(task);
            callback(null, task);
        } else {
            callback("Invalid format");
        }
    },
    remove: function(id, callback) {
        if (tasks[id] === undefined) {
            return callback("Not Found");
        }
        tasks.splice(id, 1);
        callback(null, null);
    },
    edit: function(id, task, callback){
        var exist = false;
        if(task.name){
            for (var i = 0; i < tasks.length; i++) {
                exist = tasks[i].id == id;
                if(tasks[i].id == id){
                    task.id = id;
                    tasks[i] = task;
                    break;
                }
            }
            if(!exist)return callback("Not Found");
            return callback(null,task);
        }else{
            return callback("Invalid format")
        }

    }
};
