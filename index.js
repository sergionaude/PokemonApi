require('dotenv').config();
const express = require('express');
const routes = require('./routes')
const path = require('path');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'./views'));

app.use('/', routes());


app.listen(port, ()=> {
    console.log(`La aplicacion esta corriendo en http://localhost/${port}`)
});

