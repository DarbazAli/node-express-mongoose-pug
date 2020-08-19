const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const personSchema  = new Schema({
    name: String,
    age: Number,
    nationality: String
});

exports.Person = mongoose.model('Person', personSchema);

