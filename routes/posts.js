const { application } = require('express');
const express = require('express');
const { isValidObjectId } = require('mongoose');
const Post = require('../models/Post');

const router = express.Router();

//routes
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({}).sort({_id:1}).skip(0).limit(200);
        res.json(posts);
    } catch (err) {
        res.json({ message: err})
    }
});

//specific post
router.get('/a', async (req, res) => {
    try {
        const _id='61929798cec8d10001488e4f';
        const post = await Post.findById(_id);
        //console.log(post);
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
});

module.exports = router;