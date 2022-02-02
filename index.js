const express = require('express')
const app = new express()

//par défaut seulement le GEt donc on rajoute pour gérer les éléments POST
app.use(express.urlencoded({
    extended: true
}));
const { isValidObjectId } = require('mongoose');
const modele = require('./models/Schema');


//EJS
const ejs = require('ejs')
app.set('view engine', 'ejs')


//import routes
const postsRoute = require('./routes/posts');
app.use('/', postsRoute);
app.use(express.static('public'))


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//connect to DB
const mongoose = require('mongoose');
const { exit } = require('process');
mongoose.connect('mongodb+srv://design:<password>@cluster0.d5kff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('Connexion success')
}).catch((error) => {
    console.log(error);
})


app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/index.html'))
    res.render('index') ;
    })

app.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/about.html'))
    res.render('about') ;
    })

app.get('/contact',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/contact.html'))
    res.render('contact') ;
    })