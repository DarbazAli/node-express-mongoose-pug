const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const personSchema  = new Schema({
    name: String,
    age: Number,
    nationality: String
});

const Person = mongoose.model('Person', personSchema);

exports.Person;