-- creates a table
CREATE TABLE IF NOT EXISTS unique_id (id INT DEFAULT '1' NOT NULL, name VARCHAR(256) NOT NULL, UNIQUE(id));