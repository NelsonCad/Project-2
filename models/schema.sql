DROP DATABASE IF EXISTS fumblrdb;
CREATE DATABASE fumblrdb;

USE fumblrdb;

CREATE TABLE pieces
(
	art_title VARCHAR(255) NOT NULL,
	art_link TEXT NOT NULL,
	art_description TEXT
);

CREATE TABLE artists
(
	artist_name VARCHAR(255) NOT NULL,
	age INT NOT NULL,
    country VARCHAR(50) NOT NULL
);
