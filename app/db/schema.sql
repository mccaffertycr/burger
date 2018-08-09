create database burgers_db;
use burgers_db;

create table burgers(
    id int not null auto_increment,
    name varchar(50) not null,
    eaten boolean,
    primary key (id)
);