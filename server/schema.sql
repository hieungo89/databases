CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  message varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20) NOT NULL,
  PRIMARY KEY (id)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/