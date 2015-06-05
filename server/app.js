/* Import node's http module: */
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var db = require('./db');


// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use(cors());
app.use("/classes", router);
app.use(bodyParser.json());

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}


////////////////////////////////////////////////////////////
// VARIABLE DECLARATIONS
////////////////////////////////////////////////////////////
//var serverData = {results: []};
//var data_file_path = 'data.json';

////////////////////////////////////////////////////////////
// HELPER FUNCTION DECLARATIONS
////////////////////////////////////////////////////////////
// var writeToFile = function(){
//   fs.writeFile(data_file_path, JSON.stringify(serverData) , function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
//   });
// };

// var readFromFile = function(){
//   fs.readFile(data_file_path, function(err, data) {
//     if(err) {
//         return console.log(err);
//     }

//     if(data.toString()) {
//       serverData = JSON.parse(data);
//     }

//     console.log("Retrieved data from file!");
//   });
// };

// var initialize = function(){
//   readFromFile();
// };

////////////////////////////////////////////////////////////
// EXPRESS APP
///////////////////////////////////////////////////////////

// app.use(express.static('client'));

// app.get('/classes/messages', function(req, res){
//   var response = {};
//   response.results = [];

//   if ('All Rooms' === decodeURIComponent(req.query.roomname)) {
//     response = serverData;
//   } else {
//     _.each(serverData.results, function(item){
//       if(item.roomname === decodeURIComponent(req.query.roomname)){
//         response.results.push(item);
//       }
//     });
//   }

//   res.set({'Content-Type': 'application/json'});
//   res.send(JSON.stringify(response));
// });

// app.post('/classes/messages', function(req, res){
//   console.log("getting called?");
//   var dataObj = req.body;
//   serverData.results.push(dataObj);
//   res.status(201).send('Data received');
//   writeToFile();
// });

//initialize();











