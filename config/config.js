var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
    development: {
        root: rootPath,
        app: {
            name: 'ToDoList'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://127.0.0.1/ToDoList-dev'
    },

    test: {
        root: rootPath,
        app: {
            name: 'ToDoList'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost/ToDoList-test'
    },

    production: {
        root: rootPath,
        app: {
            name: 'ToDoList'
        },
        port: process.env.PORT || 3000,
        db: 'mongodb://localhost/ToDoList-production'
    }
};

module.exports = config[env];