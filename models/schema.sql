DROP DATABASE IF EXISTS fumblrdb;
CREATE DATABASE fumblrdb;

USE fumblrdb;

CREATE TABLE pieces
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	art_link TEXT NOT NULL,
	art_description varchar(255) NOT NULL,
);

CREATE TABLE artists
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	artist_name VARCHAR(255) NOT NULL,
	age INT NOT NULL,
    country VARCHAR(50) NOT NULL,
);
