var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        res.render('index', { burgers: data });
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    burger.insertOne(req.body, (data) => {
        res.send(data);
    });
});

router.put('/update/:id', (req, res) => {
    burger.updateOne(req.body, (data) => {
        res.send(data);
    });
});

router.get('*', (req, res) => {
    res.redirect('/');
});


module.exports = router;
