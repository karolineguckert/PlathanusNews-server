const bodyParser = require('body-parser')
const express = require('express');
const server = express();

/*
  Server configurations
 */

/*
  Convert a body in json for an object js
 */
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));

server.use(function(req, res, next) {

  // Return to the same page that do de request
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type');

  res.setHeader('Access-Control-Expose-Headers', '*');

  // Finish configurations
  next();
});

/*
  Routers path
 */
const noticeRouter = require('./controller/NoticesController');

/*
  Routers definition
 */
server.use('/notice', noticeRouter);

/*
  Listen on provided port, on all network interfaces.
*/
const port = 8080;
server.set('port', port);
server.listen(port, function (){console.log("Server on-line at port " + port)});

module.exports = server;
