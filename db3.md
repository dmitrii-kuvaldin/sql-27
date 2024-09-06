## PostgresSQL lesson 3


```sql
SELECT
  book.title AS book_title, book.author, book.price, STRiNG_AGG(genre.title, ', ') AS genre
FROM
  book
  JOIN book_genre ON book.id = book_genre.book_id
  JOIN genre ON book_genre.genre_id = genre.id
GROUP BY
	book.title, book.author, book.price;
```

Оператор GROUP BY группирует повторяющиеся данные. Функция STRiNG_AGG() складывает строки, мы добавляем в строку значение уникального поля первым параметром, а вторым - разделитель.

```sql
SELECT
  job,
  AVG(age) AS average_age
FROM
  passenger
GROUP BY
  job;
```

C помощью оператора AVG() мы можем высчитывать среднее значение в выбранном поле у сгруппированных данных.


```sql
SELECT
  job,
  MAX(weight) AS max_weight
FROM
  passenger
GROUP BY
  job;
```

Когда вы работает с функциями MAX(), MIN(), AVG() - важно группировать по повторяющимся полям.

```sql
SELECT
  job,
  COUNT(id) AS amount
FROM
  passenger
GROUP BY
  job;
```

подсчет кол-во элементов по выбранному признаку.

```sql
SELECT
  *
from
  passenger
WHERE
  name LIKE 'J%'
```

Выборка элемент по вхождению в подстроке по оператору LIKE. Выводим все значения начинающиеся на 'J'


```sql
SELECT
  *
FROM
  passenger
WHERE
  (
    (age > 20) AND (weight < 100)
    AND (job != 'thief')
  );
```

Оператор WHERE может применять комплексные и сложные условия на вход. Вы можете объединить столько условий сколько вам будет нужно через операторы AND и OR.


```sql
ALTER TABLE
  passenger
ADD COLUMN
  flight_id int REFERENCES flight(id) ON DELETE CASCADE;
```
Параметр ON DELETE CASCADE для ссылочного ключа дает возможность удаление записи на которую ссылается ключи, что по умолчанию запрещено. Но в этом случае все связанные записи удалятся. Будьте осторожнее!

```sql
ALTER TABLE
  passenger
ADD COLUMN
  ticket_number varchar(20) UNIQUE;
```

Параметр UNIQUE не дает данным в таблице повториться - делает значения в выбранном поле таблице уникальными.

NOT NULL ограничение, которое не дает нам оставить поле пустым и без данных. 



