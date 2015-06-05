var mysql = require('mysql');
var db = require('../db');
var bluebird = require('bluebird');

var dbConnection = db.connection;
dbConnection.connect();


module.exports = {
  messages: {
    get: function () {
      return new bluebird(function(resolve, reject) {
        var queryString = "SELECT * FROM messages";
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          console.log('THESE ARE THE RESULTS', results);
          resolve(results);
        })
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

