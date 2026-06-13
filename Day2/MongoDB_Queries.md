
use EmployeeDB
switched to db EmployeeDB


show collections
Employee


db. Employee. find ({})
{
_id: ObjectId('6a2bdc6ddbda591f08abc114'),
name: 'Ullas',

age: 20,
salary: 20000000,
role: 'Lead SDE Developer'
}
{
_id: ObjectId('6a2bdd24dbda591f08abc115'),
name: 'Sadha Siva',

age: 19,
salary: 20000000,
role: 'Lead SDE Developer'
}


db. Employee. insertOne ( {name: 'Afroz' , age: 20, role: 'Backend Engineer'})

{
    acknowledged: true,
    6a2cbdbb6c9a704b1e527e08')
}


db. Employee. insertMany([{name:'Afroz', age: 20, role: 'Backend Engineer'}, {name: 'Robert' , age: 19, role: 'ML Engineer'}])
{
acknowledged: true,
    insertedIds: {
        '0': ObjectId('6a2cbe0a6c9a704b1e527e09'),
        '1': ObjectId('6a2cbe0a6c9a704b1e527e0a')
    }
}


db. Employee. findOne ( {name : 'Robert' })
{
_id: ObjectId('6a2cbe0a6c9a704b1e527e0a'),
name: 'Robert',

age: 19,
role: 'ML Engineer'
}

db. Employee. findOne ( {name: 'robert'})
null


db. Employee. find ( {age : {$gt:19}})
{
_id: ObjectId('6a2bdc6ddbda591f08abc114'),
name: 'Ullas',

age: 20,

salary: 20000000,
role: 'Lead SDE Developer'
}
{
_id: ObjectId('6a2cbdbb6c9a704b1e527e08'),
name: 'Afroz',

age: 20,
role: 'Backend Engineer'

_id: ObjectId('6a2cbe0a6c9a704b1e527e09'),
name: 'Afroz',

age: 20,

role: 'Backend Engineer'
}


db. Employee. updateMany ( {age: {$lt: 20}}, {$set: {teenagers: true}})
{
acknowledged: true,
insertedId: null,

matchedCount: 2,

modifiedCount: 2,

upsertedCount: 0
}


db.Employee.countDocuments()
5