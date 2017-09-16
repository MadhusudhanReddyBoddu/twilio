// index.js
// $ export TWILIO_ACCOUNT_SID=AC83d9287366e1fede821a80bd72f7e1aa;
// $ export TWILIO_AUTH_TOKEN=f9e16a5c10c78cfdd659efd6a1ce07d4;
var Hapi = require('hapi');
var server = new Hapi.Server()
server.connection({
  'host': 'localhost',
  'port': 3000
});
var socketio = require("socket.io");
var io = socketio(server.listener);
var twilio = require('twilio')(process.env.AC83d9287366e1fede821a80bd72f7e1aa, process.env.f9e16a5c10c78cfdd659efd6a1ce07d4);
 
// Serve static assets
server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: { path: './public', listing: false, index: true }
  }
});
 
// Start the server
server.start(function () {
  console.log('Server running at:', server.info.uri);
});