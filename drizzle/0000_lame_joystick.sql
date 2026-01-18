-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `classes` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `students` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(80) DEFAULT 'NULL',
	`class` varchar(10) DEFAULT 'NULL',
	`roll_no` smallint(6) DEFAULT 'NULL'
);

*/