DO
$do$
BEGIN
IF NOT EXISTS 
    (SELECT * FROM locations
    WHERE id = $1
    AND name = $2) THEN
else
    INSERT INTO locations (
    id,
    name,
    coordinates
                 )
       VALUES ($1, $2, $3)
       RETURNING *
end if;
end;
$do$
    