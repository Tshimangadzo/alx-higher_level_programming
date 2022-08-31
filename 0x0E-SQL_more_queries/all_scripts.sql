-- create a db and table
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;

USE hbtn_0d_usa;

CREATE TABLE IF NOT EXISTS states (
    id int NOT Null   AUTO_INCREMENT  ,
    name VARCHAR(256) Not NULL,
    PRIMARY KEY (id),
    UNIQUE(id)
);


INSERT INTO states (name) VALUES ("California"), ("Arizona"), ("Texas"), ("Utah");

CREATE TABLE IF NOT EXISTS cities(
    id INT AUTO_INCREMENT NOT NULL,
    state_id int NOT NULL,
    name VARCHAR (256) NOT NULL,
    UNIQUE (id),
    PRIMARY KEY (id),
    FOREIGN KEY (state_id) REFERENCES states(id)
);

INSERT INTO cities (state_id, name) VALUES (1, "San Francisco");
INSERT into cities values (2,1,'San Jose'), (4,2,'Page'), (6,3,'Paris'), (7,3,'Houston'), (8,3,'Dallas');

SELECT * FROM states;
SELECT * FROM cities;