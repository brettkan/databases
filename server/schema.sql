-- CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL,
  PRIMARY KEY (id),
  userName varchar(50)
);

CREATE TABLE messages (
  id INT NOT NULL,
  PRIMARY KEY (id),
  messageText varchar(255),
  userID INT,
  roomName varchar(50),
  FOREIGN KEY (userID)
    REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

