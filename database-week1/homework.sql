-- 1. Find out how many tasks are in the task table
Select count(id) from task;
-- 35

-- 2. Find out how many tasks in the task table do not have a valid due date
select COUNT(id) from task
WHERE due_date IS NULL
-- 8

-- 3-Find all the tasks that are marked as done
SELECT title from task 
WHERE status_id = (SELECT id from status
WHERE name = 'Done');

-- 4.Find all the tasks that are not marked as done
SELECT title from task
WHERE status_id != (SELECT id from status
WHERE name = 'Done')

-- 5. Get all the tasks, sorted with the most recently created first
SELECT * FROM task
ORDER BY created DESC;


-- 6. Get the single most recently created task
SELECT * FROM task
ORDER BY created DESC
LIMIT 1;

-- 7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE '%database%' or description LIKE '%database%';

-- 8. Get the title and status (as text) of all tasks
SELECT task.title As Task, status.name AS Progress
FROM task 
INNER JOIN status ON task.status_id = status.id;

-- 9. Get the name of each status, along with a count of how many tasks have that status
Select status.name as Status_name, count(task.id) AS Satus_name_count
From status
LEFT JOIN task on status.id = task.status_id
GROUP BY status.name;

-- 10. Get the names of all statuses, sorted by the status with most tasks first
Select status.name as Status_name, count(task.id) AS Status_name_count
From status
LEFT JOIN task on status.id = task.status_id
GROUP BY status.name
ORDER BY Status_name_count DESC;
