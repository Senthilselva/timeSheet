INSERT INTO schedules (STARTDATE, STARTTIME, ENDTIME, createdAt,updatedAt,JobId)
select DATE(ADDDATE(CURDATE(),INTERVAL 1 DAY)),
TIME(CURTIME()),
TIME(ADDTIME(CURTIME(),'0 1:1:0')),
CURDATE(),curdate(),Jobs.Id  from Jobs where jobs.id = 1;

INSERT INTO schedules (STARTDATE, STARTTIME, ENDTIME, createdAt,updatedAt,JobId,UserId)
select DATE(ADDDATE(CURDATE(),INTERVAL 1 DAY)),
TIME(CURTIME()),
TIME(ADDTIME(CURTIME(),'0 1:1:0')),
CURDATE(),curdate(),Jobs.Id,users.Id  from Jobs , users where jobs.id = 1 and users.id = 1;

INSERT INTO schedules (STARTDATE, STARTTIME, ENDTIME, createdAt,updatedAt,JobId,UserId)
select DATE(ADDDATE(CURDATE(),INTERVAL 1 DAY)),
TIME(CURTIME()),
TIME(ADDTIME(CURTIME(),'0 1:1:0')),
CURDATE(),curdate(),Jobs.Id,users.Id  from Jobs , users where jobs.id = 1 and users.id = 1;

INSERT INTO schedules (STARTDATE, STARTTIME, ENDTIME, createdAt,updatedAt,JobId,UserId)
select DATE(ADDDATE(CURDATE(),INTERVAL 1 DAY)),
TIME(CURTIME()),
TIME(ADDTIME(CURTIME(),'0 1:1:0')),
CURDATE(),curdate(),Jobs.Id,users.Id  from Jobs , users where jobs.id = 2 and users.id = 1;