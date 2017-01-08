//The user table stores information for all application’s users. Admins have a higher level of authority and have the capability to do more in the app. 
CREATE TABLE User
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    role varchar(255) NOT NULL,
    firstname varchar(50) NOT NULL,
    lastname varchar(100) NOT NULL,
    username varchar(255) NOT NULL,
    email varchar(255) NOT NULL
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip varchar(10),
    phone varchar(15),
    ssn varchar(9) NOT NULL,
    hourlywage decimal,
    password varchar(255),
    salt varchar(255),
    PRIMARY KEY (id)
);

//The company table stores information for the company. This application only stores information for ONE company.
CREATE TABLE Company
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    address varchar(100) NOT NULL,
    city varchar(100) NOT NULL,
    state varchar(2) NOT NULL,
    zip varchar(10) NOT NULL,
    contactname varchar(255) NOT NULL,
    contactphone varchar(15) NOT NULL,
    contactemail varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

//The Job table stores information for all of the company’s Job sites. 
//A Job site is a place where employees are assigned to work. A company will typically have more than one Job site.
CREATE TABLE Job
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    address varchar(100) NOT NULL,
    city varchar(100) NOT NULL,
    state varchar(2) NOT NULL,
    zip varchar(10) NOT NULL,
    contactname varchar(255),
    contactphone varchar(15),
    contactemail varchar(255),
    PRIMARY KEY (id)
);

//The Schedule table stores scheduling information for different Job sites/Employees. 
//Each Job site can have multiple Employees assigned to work during set hours. 
//Each Employee can also be assigned to work at multiple Job sites in a given day
CREATE TABLE Schedule
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    jobID INTEGER NOT NULL,
    userID INTEGER NOT NULL,    
    startdate DATE,
    starttime TIME,
    endtime TIME,
    duration INTEGER,
    PRIMARY KEY (id)
    //FOREIGN KEY (userID) REFERENCES Users(id)
    //FOREIGN KEY (jobID) REFERENCES Jobs(id)
);

//The Timesheet table stores the details of an Employee’s time spent at a Job site. 
//The Employee, Job site, date worked, start and end times, and duration are all stored in this table.
CREATE TABLE TimeSheet
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    startdate DATE,
    clockedIn TIME,
    clockedOut TIME,
    duration INTEGER,
    PRIMARY KEY (id)
    //FOREIGN KEY (userID) REFERENCES Users(id)
    //FOREIGN KEY (jobID) REFERENCES Jobs(id)
);
