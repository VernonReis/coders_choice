const express = require('express');
const router = express.Router();

const Wrestler = require('../models/wrestlers');

router.get('/', async (req, res) => {

});

router.post('/', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

module.exports = router;
