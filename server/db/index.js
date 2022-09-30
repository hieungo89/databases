// var Sequelize = require('Sequelize');
// var orm = new Sequelize('chat', 'root');

// var User = orm.define('User', {
//   usename: Sequelize.STRING
// });

// var Message = orm.define('Message', {
//   message: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// User.hasMany(Message);
// // belongsTo tells where they foreign key lives to orm
// Message.belongsTo(User);

// User.sync();
// Message.sync();

// exports.User = User;
// exports.Message = Message;

var mysql = require('mysql2');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected!");
});

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


module.exports = connection;