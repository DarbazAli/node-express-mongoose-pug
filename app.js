const express = require('express');
const mongoose = require('mongoose');
const Person = require('./Schema');


const app = express();

app.listen(3000, () => console.log("Listening on 3000"))


/*================================================================ 
    CONNECT TO MONGODB DB
================================================================*/
const mongo_uri = "mongodb://localhost:27017/test";
mongoose.connect(mongo_uri, {useUnifiedTopology: true, useNewUrlParser: true})


// setup template engine
app.set('views', './views')
app.set('view engine', 'pug')

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