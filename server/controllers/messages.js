var models = require('../models');
// var bluebird = require('bluebird');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {

    // orm version
    // Message.findAll({ include: [User] }) //performs left outer join
    //   .complete((err, results) => {
    //     if (err) {
    //       throw err;
    //     } else {
    //       res.json(results);
    //     }
    //   });


    models.messages.getAll((err, results) => {
      if (err) {
        // console.log('error', err);
        // throw err;
      } else {
        res.status(200);

        // results.map((item) => {
        //   console.log('mapping = ', item)
        // })

        var chatProperties = [];
        for (var i = 0; i < results.length; i++) {
          let currentMessageObject = results[i];
          var chatObj = {
            message_id: i+1,
            username: currentMessageObject.user_id,
            text: currentMessageObject.message,
            roomname: currentMessageObject.roomname,
            createdAt: new Date()
          }
          chatProperties.push(chatObj);
        }



        // var mapping = results.map((item => {
        //   item;
        // }))
        // console.log('map: ', mapping);

        // var chatProperties = {
        //   message_id: 1,
        //   username: "DarthVADER",
        //   text: results[0].message,
        //   roomname: results[0].roomname,
        //   createdAt: new Date()
        // };

        console.log('result: ', chatProperties);

        res.json(chatProperties);
      }
    });
  },

  // a function which handles posting a message to the database
  post: function (req, res) {

    // orm version
    // User.findOrCreate({ username: req.body[username] })
    //   .complete((err, user) => {
    //     var params = {
    //       message: req.body[message],
    //       user_id: user.id,
    //       roomname: req.body[roomname]
    //     };
    //     Message.create(params)
    //       .complete((err, results) => {
    //         res.sendStatus(201);
    //       });
    //   })


    // var params = [req.body[message], req.body[username], req.body[roomname]];
    models.messages.create(req.body, (err, results) => {
      if (err) {
        console.log('error : ', err);
        // throw err;
      } else {
        // console.log('results : ', results);

        res.json(results);
      }
    });
  }
};
