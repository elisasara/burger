CREATE DATABASE iceCream_db;
USE iceCream_db;

CREATE TABLE iceCream (
    id INTEGER NOT NULL AUTO_INCREMENT,
    iceCream_name VARCHAR(300) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

