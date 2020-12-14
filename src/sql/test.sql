CREATE DATABASE SimpleSurvey;
USE SimpleSurvey;
CREATE TABLE User
(
id int AUTO_INCREMENT,
name varchar(300) NOT NULL,
password varchar(300) NOT NULL,
email varchar(200) NOT NULL,
status varchar(100),
PRIMARY KEY (id)
);

CREATE TABLE Access
(
id int AUTO_INCREMENT,
role varchar(100) NOT NULL,
user_id int,
survay_id int,
PRIMARY KEY (id)
);

CREATE TABLE Action
(
id int AUTO_INCREMENT,
lastSurvayState varchar(100) NOT NULL,
actedAt datetime,
survay_id int,
user_id int,
PRIMARY KEY(id)
);

CREATE TABLE Question
(
id int AUTO_INCREMENT,
text varchar(1000) NOT NULL,
survay_id int,
PRIMARY KEY(id)
);

CREATE TABLE Answer
(
id int AUTO_INCREMENT,
answerKey varchar(50), 
answerIndex int,
question_id int,
user_id int,
PRIMARY KEY(id)
);

CREATE TABLE Survay
(
id int AUTO_INCREMENT,
name varchar(300) NOT NULL,
description varchar(1000) NOT NULL,
PRIMARY KEY(id)
);
ALTER TABLE Access
ADD FOREIGN KEY (user_id)
REFERENCES User (id)
ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Access
ADD FOREIGN KEY (survay_id)
REFERENCES Survay (id)
ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Action
ADD FOREIGN KEY (user_id)
REFERENCES User (id)
ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Action
ADD FOREIGN KEY (survay_id)
REFERENCES Survay (id)
ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Question
ADD FOREIGN KEY (survay_id)
REFERENCES Survay (id)
ON DELETE No Action ON UPDATE No Action;

ALTER TABLE Answer
ADD FOREIGN KEY (user_id)
REFERENCES User (id)
ON DELETE No Action ON UPDATE No Action;
ALTER TABLE Answer
ADD FOREIGN KEY (question_id)
REFERENCES Question (id)
ON DELETE No Action ON UPDATE No Action;

INSERT INTO User(name, password, email, status) VALUES('Рустамов Арсен', 'rustamov', 'jot000007@gmail.com', null);

INSERT INTO Survay(name, description) VALUES('Тестовый опрос', 'Должен быть заменён');

INSERT INTO Access(role, user_id, survay_id) VALUES('teamleader', 1, 1);

INSERT INTO Question(text, survay_id) VALUES('Вы верите в бога?',1);
INSERT INTO Action(lastSurvayState , actedAt , survay_id , user_id) VALUES('Updated', '2020-11-20 23:59:59', 1, 1);
INSERT INTO Action(lastSurvayState , actedAt , survay_id , user_id) VALUES('Completed', '2020-12-10 23:59:59', 1, 3);
