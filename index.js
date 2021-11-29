const express = require('express')
const app = new express()

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//post
/*var path = require('path')
var bodyParser = require('body-parser');
app.post('/', function(req,res){
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
});*/
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.post('/recherche', function(req, res) {
    console.log('post recu');
    console.log(req.body.IdTx);
    res.send(req.body.IdTx);
});

//connect to DB
const mongoose = require('mongoose');
const { exit } = require('process');
mongoose.connect('mongodb+srv://design:design@cluster0.d5kff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('Connexion success')
}).catch((error) => {
    console.log(error);
})

app.use(express.static('dist'))

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
    })

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'dist/about.html'))
    })

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'dist/contact.html'))
    })

app.get('/post',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'dist/post.html'))
    })


