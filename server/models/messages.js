var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    var queryStr = "SELECT messages.user_id, messages.message, messages.roomname FROM messages left join users ON messages.user_id = users.id";
    db.query(queryStr, (err, results) => {
      if (err) {
        console.log('error: ', err);
        // throw err;
      } else {
        callback(null, results);
      }
    })
  },
  // a function which can be used to insert a message into the database
  create: function (params, callback) {
    console.log('create Params = ', params);
    var exportedParams = [params.text, params.username, params.roomname];
    var queryStr = "INSERT INTO messages(message, user_id, roomname) VALUES(?, (SELECT id from users WHERE username = ? limit 1), ?)";
    db.query(queryStr, exportedParams, (err, results) => {
      if (err) {
        console.log('error: ', err);
        // throw err;
      } else {
        callback(null, results);
      }
    })
  }
};











// const fs = require('fs');

// const messagesArr = JSON.parse(fs.readFileSync('server/stored-messages.txt'));
//   // this is a text tile that we are reading, to then parse into an array
//   // typeof messagesArray should be an array

// var requestHandler = function (request, response) {
//   var headers = defaultCorsHeaders;
//   headers["Content-Type"] = "application/json";

//   console.log("request", request.method);

//   if (request.url === "/classes/messages") {
//     var statusCode = 200;

//     if (request.method === "GET") {
//       response.writeHead(statusCode, headers);
//       response.end(JSON.stringify(messagesArr));
//     }
//     if (request.method === "POST") {
//       response.writeHead(201, headers);
//       let body = "";
//       request.on("data", (data) => {
//         body += data.toString();
//       });
//       request.on("end", () => {
//         let message = JSON.parse(body);
//         message.createdAt = new Date();
//         message.message_id = messagesArr.length + 1;
//         messagesArr.push(message);
//         fs.writeFileSync('server/stored-messages.txt', JSON.stringify(messagesArr));
//         response.end(JSON.stringify(messagesArr));
//       });
//     }
//     if (request.method === "OPTIONS") {
//       response.writeHead(statusCode, headers);
//       response.end();
//     }
//   } else {
//     response.writeHead(404, headers);
//     response.end("Not Found");
//   }
// };

// var defaultCorsHeaders = {
//   "access-control-allow-origin": "*",
//   "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "access-control-allow-headers": "content-type, accept, authorization",
//   "access-control-max-age": 10, // Seconds.
// };

// exports.requestHandler = requestHandler;