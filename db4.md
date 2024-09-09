## homework

```sql
 CREATE DATABASE pets_beauty_2024;
CREATE TABLE
  Client (
    id serial PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password_hash VARCHAR(200) NOT NULL
  );
CREATE TABLE
  pet (
    id SERIAL PRIMARY KEY,
    pet_name VARCHAR(50) NOT NULL,
    pet_type VARCHAR(50) NOT NULL,
    breed VARCHAR(50) DEFAULT 'outbred',
    birthdate DATE,
    client_id INTEGER REFERENCES client (id) ON DELETE CASCADE
  )
CREATE TABLE
  employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    position VARCHAR(50),
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL
  )
CREATE TABLE
  service (
    id SERIAL PRIMARY KEY,
    service_name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
		description TEXT
  )
CREATE TABLE
  appointment (
    id SERIAL PRIMARY KEY,
    appointment_date TIMESTAMP NOT NULL,
    pet_id INTEGER REFERENCES pet (id) ON DELETE CASCADE,
    client_id INTEGER REFERENCES client (id) ON DELETE CASCADE,
    employee_id INTEGER REFERENCES employee (id) ON DELETE SET NULL,
    service_id INTEGER REFERENCES service (id) ON DELETE SET NULL,
		status VARCHAR(20) DEFAULT 'scheduled'
  )
INSERT INTO
  client (first_name, last_name, phone, email)
VALUES
  (
    'Alla',
    'Novytska',
    '123-456-789',
    'alla-novytska@gmail.com'
  );
INSERT INTO
  pet (pet_name, pet_type, breed, birthdate, client_id)
VALUES ('Lada', 'dog', 'border collie', '2018-04-01', 1);
INSERT INTO
  employee (first_name, last_name, position, phone, email)
VALUES
  (
    'Alex',
    'Rastvortsev',
    'groomer',
    '123-456-7890',
    'alex@gmail.com'
  );
INSERT INTO
  service (service_name, price, description)
VALUES
  (
    'Complex fur style', 300, 'professional fur styling'
  );
INSERT INTO
  appointment (
    appointment_date,
    pet_id,
    client_id,
    employee_id,
    service_id,
    status
  )
VALUES
  ('2024-09-09 18:45:00', 1, 1, 1, 1, 'scheduled');
SELECT
  client.first_name,
  client.last_name,
  pet.pet_name,
  service.service_name,
  appointment.appointment_date,
  employee.first_name AS "person"
FROM
  appointment
  JOIN client ON appointment.client_id = client.id
  JOIN pet ON appointment.pet_id = pet.id
  JOIN service ON appointment.service_id = service.id
  JOIN employee ON appointment.employee_id = employee.id;
```
