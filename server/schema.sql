CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int auto_increment,
  username varchar(255),
  text varchar(255),
  date date,
  roomname varchar(20),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  id int auto_increment,
  roomname varchar(20),
  PRIMARY KEY (id)
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/