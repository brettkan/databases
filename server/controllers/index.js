var models = require('../models');
var bluebird = require('bluebird');
var _ = require('underscore');

var serverData = {results:[{"username":"name", "text":"something", "roomname":"x", "createdAt":new Date()}]};

module.exports = {
  messages: {
    get: function (req, res) {
      var response = {};
      response.results = [];

      models.messages.get()
        .then(function(data) {
          console.log(data);
          res.set({'Content-Type': 'application/json'});
          res.send(JSON.stringify(data));
        })

      //if ('All Rooms' === decodeURIComponent(req.query.roomname)) {
        // response = serverData;
      //} else {
        //_.each(serverData.results, function(item){
         // if(item.roomname === decodeURIComponent(req.query.roomname)){
          //  response.results.push(item);
          //}
        //});
      //}

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("getting called?");
      var dataObj = req.body;
      serverData.results.push(dataObj);
      res.status(201).send('Data received');
      //writeToFile();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

