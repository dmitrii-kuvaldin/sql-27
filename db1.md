## PostgreSQL

- SQL Structured Query Language - структурированный язык запросов

- CRUD - Create Read Update Delete

```sql
CREATE USER
  dmitrii_k
WITH
  PASSWORD 'qwerty007';
```

создание нового пользователя с паролем


```sql
CREATE DATABASE
  students_postgres OWNER dmitrii_k;
```

создание новой базы данных

```sql
CREATE TABLE
  student (
    id serial PRIMARY KEY,
    name varchar(80),
    age integer,
    hobby varchar(80)
  );
```

создание новой таблицы

```sql
INSERT INTO
  student (name, age, hobby)
VALUES
  ('Alla', 60, 'art'),
	('Vitan', 23, 'sport fencing'),
	('Rostislav', 20, 'boxing');
```

добавление новых записей в таблицу
в скобках вы перечисляете поля в том же порядке, в котором будете вводить значение. тип serial используемый для id приходит сам с авто инкрементом после каждой новой записи.

```sql
SELECT
  hobby,
  name
FROM
  student;
```

вывод данных по выборочным полям из нужной таблицы. порядок и кол-во полей влияет на вывод


```sql
SELECT
  hobby,
  name
FROM
  student
WHERE
	age > 21;
```

вывод данных по условию

```sql
DELETE FROM student;
```

удаление всех данных из таблицы;

```sql
DELETE FROM
  student
WHERE
  id = 10;
```

удаление данных по id;


```sql
DELETE FROM
  student
WHERE
  age = 23
  OR hobby = 'art';
```

удаление данных из таблицы по условию


```sql
SELECT
  name,
  hobby,
  age
FROM
  student
ORDER BY
  age DESC;
```

выдача данных с сортировкой в обратном порядке


```sql
UPDATE
  student
SET
  hobby = 'books reading'
WHERE
  name = 'Tatiana';
```

обновление данных по условию




