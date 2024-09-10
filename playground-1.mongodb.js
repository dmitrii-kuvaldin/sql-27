// ! в базах данных mongo аналогом таблицы из sql баз данных являются коллекции

// * одна запись в коллекции - документ

// нет отдельной команды для создания бд - если такой базы еще нет она создается

// нет отдельной команды для создании коллекции - при добавлении документа к несуществующей коллекции - она создается

// подключение к текущей базе данных (или создание если таковой нет)

use("students_db")

// мы создали еще не существующую коллекцию students и добавили в нее первый документ
// db.students.insertOne({name: 'Alla'})

// db.students.insertOne({name: 'Olga', hasPets: true})

// db.students.insertMany([
//   {name: 'Alex'},
//   {name: 'Tanya', hobby: ['literature', 'cooking', 'hiking']}
// ])

// find() вызванный у коллекции без параметров возвращает в массиве объектов все ее документы (все записи в ней)

// метод limit() выдает ограниченное количество документов, в функцию передаем число документов для выдачи

// в методе sort() мы передаем объект, в котором ключ - поле, по которому будет идти сортировка, значение - 1 (по алфавиту), (-1 обратный порядок)

// db.students.find().limit(4).sort({name: 1})

// db.students.find({name: 'Alex'})

// в методе find() можно использовать математические операторы:

// $gt - greater than - >
// $lt - less then - <
// $gte - greater than + >=
// $lte - less than + equal - <=
// $eq - equal - ===


db.students.find({age:{$gte: 36}})


