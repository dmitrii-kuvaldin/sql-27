## commands



```javascript
use("47_lesson_2")

// * CRUD - Create, Read, Update, Delete

// Create - insertOne(), insertMany()
// Read - find(), aggregate()
// Update - updateMany(), updateOne()
// Delete - deleteMany(), deleteOne(),

// db.students.find()

// один документ в коллекции можно найти передав в метод find() объект в значении которого мы вызываем строковый идентификатор записи в функции ObjectId()

// db.students.find({"_id": ObjectId('66df4033985d8d479ac91698')})

// $gt - '>'
// $lt - '<'
// $gte - '>='
// $lte - '<='

// * limit() - кол-во документов в выдаче

// db.students.find({age: {$gte: 23}}).limit()

// db.students.insertOne({name: 'Dmitrii', hobby: ['biking', 'hiking']})

// db.students.find({name: 'Dmitrii'})

// * проверяем, что хотя бы одно из нескольких условий верное - используя оператор &or

// db.students.find({$or: [{age:60}, {age:36}]})


// * проверяем, что оба условия верные - используем оператор &and

// db.students.find({$and: [{age:60}, {name:'Alla'}]})

// * $exists - совершает проверку на существование выбранного поля

// db.students.find({age: {$exists: false}})

// * проверка на вхождение в массив через оператор $in - проверяем что у документов в коллекции есть хотя бы одно из значений в массиве
// * $nin - оператор обратный данному

// db.students.find({hobby:{$in: ["hiking","literature", "cooking"]}})

// db.animals.insertMany([
//   {kind: 'lion', weight: 200, name: 'Alan', predatory: true},
//   {kind: 'zebra', weight: 150, name: 'Marty', predatory: false},
//   {kind: 'hippo', weight: 500, name: 'Gloria', predatory: false},
//   {kind: 'giraffe', weight: 250, name: 'Melman', predatory: false},
//   {kind: 'penguin', weight: 30, name: 'Kovalsky', predatory: true},
//   {king: 'shark', weight: 300, name: 'Jaws', predatory: true}
// ])

// db.animals.insertOne({kind: 'lion', weight: 180, name: 'Simba', predatory: true})

// * удаление всех документов из коллекции

// db.animals.deleteMany({})

// updateMany() обновляет найденные по условию документы, первым параметром мы передаем объект с условиями для поиска изменяемых документов, вторым параметром передаем действия для изменения в виде объекта с выбранным оператором

// оператор $set используем для перезаписывания значения поля

// db.animals.updateMany(
//   {_id: ObjectId('66e07a792fbfc689f0a05d4a')}, {$set: {gender: 'female'}})

// оператор $inc используем для работы с предыдущим значением поля для его увеличения / уменьшения с отрицательными числами

// db.animals.updateMany(
//     {kind: 'penguin'}, {$inc: {weight: -20}})



// db.animals.updateOne({kind: 'lion'}, {$set:{predatory: false}})

// * aggregation with aggregate()

// условия-фильтры для выдачи передаются каждое в своем объекте, как элементы массива дру за другом
// $match - проверяем значение по условию\
// $sort - сортировка, 1 - по возрастанию, 2 - в обратном порядке
// $limit - лимит выдачи
// $project - регуляция выдачи нужных полей
// $count - считаем документы, удовлетворяющие условию
// $sum - оператор сложения для выбранных полей
// $group - оператор группировки
// $sample - оператор для случайной выдачи документов из коллекции
// $lookup - оператор выдачи данных по связанным коллекциям

// db.animals.aggregate([
//   {$match: {predatory: true}},
//  {$project: {name: 1, kind:1, _id: 0}}
// ])

// db.animals.aggregate([
//   {$match: {predatory: false}},
//  {$count: 'number_of_non_predators'}
// ])

// db.animals.aggregate([
//   {$match: {predatory: true}},
//   {$group: {
//     _id: null,
//     total_weight: {
//       $sum: "$weight"
//     }
//   }},
//   {$project: {_id: 0}}
// ])


// db.animals.aggregate([
//   {$sample: {
//     size: 1
//   }}
// ])

// db.posts.insertOne({
//   likes:10,
//   text: 'What a wonderful day!'
// })

// db.comments.insertMany([
//   {email: '123@mail.com', message: 'This day is great! Agree!!!', post_id: ObjectId('66e08da9d28e495be37bd294')},
//   {email: '456@mail.com', message: 'This day is bad... :(', post_id: ObjectId('66e08da9d28e495be37bd294')},
//   {email: '789@mail.com', message: 'This is regular day, but I like it! :)', post_id: ObjectId('66e08da9d28e495be37bd294')},
// ])

// db.comments.aggregate([
//   {
//     $lookup: {
//       from: 'posts',
//       localField: 'post_id',
//       foreignField: '_id',
//       as: 'post_info'
//     }
//   }
// ])

db.posts.aggregate([
  {
    $lookup: {
      from: 'comments',
      localField: '_id',
      foreignField: 'post_id',
      as: 'post_info'
    }
  },
  {$project: {_id: 0}}
])```
