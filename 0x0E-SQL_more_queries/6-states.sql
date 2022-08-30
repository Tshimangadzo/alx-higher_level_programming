-- create a db and table
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS states (
    id int NOT Null   AUTO_INCREMENT  ,
    name VARCHAR(256) Not NULL,
    PRIMARY KEY (id),
    UNIQUE(id)
);
