const { application } = require('express');
const express = require('express');
const { isValidObjectId } = require('mongoose');
const { count } = require('../models/Schema');
const models = require('../models/Schema');
const tx = require('../models/Schema2');
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

const router = express.Router();

router.post("/posts", async function(req, res, next) {
    //var outputData = { balance: 0 };
    const inputIdTx = req.body.IdTx;
    //console.log(inputIdTx);
    const result = await models.findById(inputIdTx);
    //const bonId = await tx.find({ "blockId.data" : result.block.header.id.data});
    //console.log(result._id);
    /*
    console.log(bonId);
    const tableau = bonId[0].transaction.outputs;
    console.log("ceci est le tableau : " + tableau);
    const nombre = await tx.count({"blockId.data" : result.block.header.id.data}); 
    console.log("ceci est le nombre : " + nombre);


    tx.count({ "blockId.data" : result.block.header.id.data }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Number of documents in this ID " + result);
        }
      });
    */
    const bonId = await tx.aggregate([
        {$match: { _id: ObjectId('6192977acec8d10001488e33') }},
        {$project:
            //{Number: { $cond: { if: { $isArray: "$outputs" }, then: { $size: "$outputs" }, else: "NA"} }
            {nombre: {$size: "$transaction.outputs"}
         }}
     ] )
    //console.log(bonId);
    //console.log(bonId[0].nombre);
    //console.log(result)

    /*
    en js, quand tu vois [] c’est un array / tableau, donc tu peux y accéder avec l’index (0, 1, etc.)
    quand tu vois des {}, c’est un object. Ce dernier a key et values
    tu auras donc monObject { key1: maVal1, key2: maVal2, etc. }
    tu peux avoir accès à toutes les valeurs avec monObject.key
     */

    res.json( { result: result, bonId: bonId } );
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