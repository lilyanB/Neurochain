const { application } = require('express');
const express = require('express')
const Post = require('../models/Post');

const router = express.Router();

//routes
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err})
    }
});

//specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
});

module.exports = router;