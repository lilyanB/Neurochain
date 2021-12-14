const { application } = require('express');
const express = require('express');
const { isValidObjectId } = require('mongoose');
const model = require('../models/Schema');

const router = express.Router();

router.post("/posts", async function(req, res, next) {
    var outputData = { balance: 0 };
    const inputIdTx = req.body.IdTx;
    console.log(inputIdTx);
    const result = await model.findById(inputIdTx);
    console.log(result._id);
    res.json(result);
});

module.exports = router;



/*
//routes
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({}).sort({_id:1}).skip(0).limit(200);
        res.json(posts);
    } catch (err) {
        res.json({ message: err})
    }
});
*/
//specific post
/*
router.get('/:postId', async (req, res) => {
    try {
        const Id = postId
        const post = await Post.findById(Id);
        console.log(post);
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
});


router.get('/:postId', async (req, res) => {
    try {
        const Id = req.params.postId
        const post = await Post.findById(Id);
        console.log(post);
        res.json(post);
    } catch (err) {
        res.json({ message: err});
    }
});
*/