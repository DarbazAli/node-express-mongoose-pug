const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Person = require('./Schema').Person;
require('dotenv').config();


const app = express();

app.listen(3000, () => console.log("Listening on 3000"))


/*================================================================ 
    CONNECT TO MONGODB DB
================================================================*/
const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri, {useUnifiedTopology: true, useNewUrlParser: true})


// setup template engine
app.set('views', './views')
app.set('view engine', 'pug')

// use body-parser middleware
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
});

app.get('/about', (req, res) => {
    res.render('about', {title: "About"})
})

/*================================================================ 
    SETUP SIGNUP GET ROUTER
================================================================*/
app.get('/signup', (req, res) => {
    res.render('signup', {title: "Signup"})
})


/*================================================================
    SETUP POST REQUEST ROUTER FOR SIGNUP PAGE
================================================================*/
app.post('/signup', (req, res) => {

    // extract field values from the request body
    const {name, age, country } = req.body;

    // if one of the fields are empty, yeld an error and prevent from performing any action toward the database
    if ( !name || !age || !country ) res.send("Sorry, you provided wrong data")
    else {
        // construct new person from field values
        const newPerson = new Person({
            name: name,
            age: age,
            nationality: country
        })
        createAndSavePerson(newPerson, res)
    }
})




/*================================================================
    SETUP PEOPLE ROUTER TO RETRIVE DATA FROM DB
================================================================*/
app.get('/people', (req, res) => {
    // get query name from submit form
    let name = req.query.query

    // search for all entries
    if (name === "All" || name === 'all') {
        Person.find( (err, response) => {
            if ( err ) res.send(err)
            res.render('index', {people: response})
        })
    }
    else {
        // look for names with query name inside the db
        Person.find({name: name}, (err, response) => {
            if ( err ) res.send(err)
            res.render('index', {people: response})
        })
    }
    
    
})

/*================================================================
    SAVE QUERY
================================================================*/
var createAndSavePerson = function(Person, done) {
    Person.save( (err, data ) => {
        if ( err ) done.send(err)
        else done.send(data.name + " added successfuly")
    })
};


app.post('/delete', (req, res) => {
    var id = req.body.id;
    Person.findOneAndDelete({_id: id}).exec();
    res.redirect('/people?query=All')
})