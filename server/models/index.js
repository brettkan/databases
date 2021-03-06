var mysql = require('mysql');
var db = require('../db');
var bluebird = require('bluebird');

var dbConnection = db.connection;
dbConnection.connect();


module.exports = {
  messages: {
    get: function () {
      return new bluebird(function(resolve, reject) {
        var queryString = "SELECT users.id as userid, messages.id , users.username, messages.text FROM messages \
        inner join users on users.id = messages.userID";
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          console.log('THESE ARE THE RESULTS', results);
          resolve(results);
        })
      });
    }, // a function which produces all the messages
    post: function (data) {
      //data = {"roomName":"ddd", "messageText":"ggggg" , "userID":2}
      return new bluebird(function(resolve, reject) {
        var queryString = "INSERT INTO messages SET ? ";
        var queryArgs = [];

        dbConnection.query(queryString, data, function(err, results) {
          if(err)
            console.log(err);
          console.log('THESE ARE THE RESULTS', results);
          resolve(results);
        })
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (data) {
      //CONTINUE HERE!!!!!
      //data = {"roomName":"ddd", "messageText":"ggggg" , "userID":2}
      return new bluebird(function(resolve, reject) {
        var queryString = "INSERT INTO users SET ? ";
        var queryArgs = [];

        dbConnection.query(queryString, data, function(err, users) {
          if(err)
            console.log(err);
          console.log('THESE ARE THE USERS', users);
          resolve(users);
        })
      });
    }
  }
};

