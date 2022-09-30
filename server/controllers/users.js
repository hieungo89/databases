var models = require('../models');

module.exports = {
  get: function (req, res) {

    // User.findAll();
    //   .complete((err, results) => {
    //   res.json(results);
    //   });



  models.users.get((err, results) => {
    if (err) {
      console.log('error: ', err);
      // throw err;
    } else {
      res.json(results);
    }
  });
  },

  post: function (req, res) {

    // User.create({ username: req.body[username] })
    //   .complete((err, user) => {
    //     if (err) {
    //       throw err;
    //     } else {
    //       res.sendStatus(201);
    //     }
    //   })


      var params = [req.body[username]];
      models.users.post(params, (err, results) => {
        if (err) {
          console.log('error: ', err);
          // throw err;
        } else {
          res.json(results);
        }
      });
    }
  };
// }
