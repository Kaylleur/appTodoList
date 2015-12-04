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
    }
};
