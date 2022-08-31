--  lists all cities contained in the database

SELECT c.id, c.name, s.name
from cities as c LEFT JOIN states as s on c.state_id = s.id;