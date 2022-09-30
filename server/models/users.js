var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // fetch all users

    var queryStr = "SELECT * FROM users";
    db.query(queryStr, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(null, results);
      }
    });

  },
  create: function (params, callback) {
    // store a user
    var queryStr = "INSERT INTO users (username) VALUES (?)";
    db.query(queryStr, params, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(null, results);
      }
    });
  }
};
