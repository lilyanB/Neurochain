const express = require('express')
const app = new express()

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//connect to DB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://design:design@cluster0.d5kff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('Connexion success')
}).catch((error) => {
    console.log(error);
})

app.use(express.static('dist'))

const path = require('path')


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