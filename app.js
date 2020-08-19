const express = require('express');

const app = express();

app.listen(3000, () => console.log("Listening on 3000"))

// setup template engine
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
});