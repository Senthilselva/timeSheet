INSERT INTO Schedules (STARTDATE, STARTTIME, ENDTIME, createdAt,updatedAt,JobId,UserId)
select DATE(ADDDATE(CURDATE(),INTERVAL 1 DAY)),
TIME(CURTIME()),
TIME(ADDTIME(CURTIME(),'0 1:1:0')),
CURDATE(),curdate(),Jobs.Id,Users.Id  from Jobs , Users where Jobs.id = 1 and Users.id = 1;

INSERT INTO Schedules (STARTDATE, STARTTIME, ENDTIME, createdAt,updatedAt,JobId,UserId)
select DATE(ADDDATE(CURDATE(),INTERVAL 1 DAY)),
TIME(CURTIME()),
TIME(ADDTIME(CURTIME(),'0 1:1:0')),
CURDATE(),curdate(),Jobs.Id,Users.Id  from Jobs , Users where Jobs.id = 1 and Users.id = 1;

INSERT INTO Schedules (STARTDATE, STARTTIME, ENDTIME, createdAt,updatedAt,JobId,UserId)
select DATE(ADDDATE(CURDATE(),INTERVAL 1 DAY)),
TIME(CURTIME()),
TIME(ADDTIME(CURTIME(),'0 1:1:0')),
CURDATE(),curdate(),Jobs.Id,Users.Id  from Jobs , Users where Jobs.id = 2 and Users.id = 1;