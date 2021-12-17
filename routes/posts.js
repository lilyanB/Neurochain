const { application } = require('express');
const express = require('express');
const { isValidObjectId } = require('mongoose');
const models = require('../models/Schema');
const tx = require('../models/Schema2');

const router = express.Router();

router.post("/posts", async function(req, res, next) {
    //var outputData = { balance: 0 };
    const inputIdTx = req.body.IdTx;
    //console.log(inputIdTx);
    const result = await models.findById(inputIdTx);
    const result2 = await tx.find({ "blockId.data" : result.block.header.id.data});
    //const result3 = await tx.findById("6192977acec8d10001488e33");
    //console.log(result._id);
    console.log(result2);
    //console.log(result3);
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