DROP DATABASE IF EXISTS burgers_bd;

CREATE DATABASE burgers_bd;

USE burgers_bd;

CREATE TABLE burger
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(225) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
