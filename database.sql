
-- -- USER is a reserved keyword with Postgres
-- -- You must use double quotes in every query that user is in:
-- -- ex. SELECT * FROM "user";
-- -- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );

--CREATE DATABASE called "furniture-exchange"
-- Tables you need for base mode
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR (80) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"email" VARCHAR (1000) NOT NULL,
	"phone_number" integer
	);
	
CREATE TABLE "furniture" (
	"id" SERIAL PRIMARY KEY,
	"user_id" int REFERENCES "user",
	"picture_url" VARCHAR (5000),
	"description" VARCHAR (5000),
	"furniture_type" VARCHAR (200),
	"sold" BOOLEAN DEFAULT FALSE
	);
	
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"user_id" int REFERENCES "user",
	"furniture_id" int REFERENCES "furniture"
	);
	
