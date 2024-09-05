## PostgresSQL lesson 2

Между таблицами есть 4 вида связей:

1. One to many - один ко многим, связь через ссылочный ключ. Одна категория может быть у нескольких продуктов.

2. Many to one - та же связь, но с другой стороны. Например у продукта есть ссылка на категорию и у другого продукта может быть ссылка на эту категорию.

3. Many to many - связь через промежуточную таблицу, в которой одна новая запись - одна новая связь (используем если хотим связать, например несколько книжек с несколькими категориями)

4. One to one - один к одному, уникальная связь, редкая в применении - чаще из соображений безопасности (например с паролями)

```sql
CREATE TABLE
  category (id serial PRIMARY KEY, title varchar(80));

CREATE TABLE
  product (
    id serial PRIMARY KEY,
    title varchar(80),
    price integer,
    category_id integer REFERENCES category(id)
  );
```

Создание связанных через ссылочные ключи таблиц.

```sql
 INSERT INTO
  category (title)
VALUES
  ('fruits'),
  ('food'),
  ('clothes'),
  ('shoes');

INSERT INTO
  product (title, price, category_id)
VALUES
  ('orange', 1, 1),
  ('nike air max', 300, 4),
  ('olives', 2, 2),
  ('milka chocolate bar', 3, 2),
  ('Red t-shirt', 15, 3),
  ('dragon fruit', 10, 1);
```

Заполняем значениями связанные таблицы. Начинаем с той таблицы, на которую идет ссылка, чтобы знать информацию об id - ведь связь будет по ним;

```sql
SELECT
  *
FROM
  product
  JOIN category ON category.id = product.category_id;
```

Забираем данные из связанных таблиц. Для этого мы связываем из через операторы JOIN и ON явно указывая по каким полям в таблицах происходит связь.

```sql
SELECT
  product.title, product.price, category.title
FROM
  product
  JOIN category ON category.id = product.category_id;
```

Чтобы забрать данные по выборочным полям мы явно указываем из какой таблицы они к нам приходят. Синтаксис похож на обращение к объекту по ключу.

```sql
SELECT
  product.id, product.title AS product_title, product.price, category.title AS category
FROM
  product
  JOIN category ON category.id = product.category_id;
```

Если мы хотим изменить названия поля при выдаче можно воспользоваться оператором AS (псевдоним) и указать новое значение для поля, например, если оно дублируется.

```sql
CREATE TABLE
  book (
    id serial PRIMARY KEY,
    title varchar(80),
    year integer
  );

CREATE TABLE
  genre (id serial PRIMARY KEY, title varchar(80));

CREATE TABLE
  book_genre (
    book_id integer REFERENCES book (id),
    genre_id integer REFERENCES genre (id)
  );
```

Создание таблиц со связью many-to-many через техническую таблицу с ссылочными ключами.

```sql
SELECT
  *
FROM
  book
  JOIN book_genre ON book.id = book_genre.book_id
  JOIN genre ON book_genre.genre_id = genre.id;
```

Вывод всех данных через промежуточную таблицу без группировки.

```sql
SELECT
  book.title, book.year, genre.title as genre
FROM
  book
  JOIN book_genre ON book.id = book_genre.book_id
  JOIN genre ON book_genre.genre_id = genre.id
WHERE
  book.id = 3;
```
Вывод данным по условию с выбором нужных полей.
