const express = require('express');
const router = express.Router();

const Wrestler = require('../models/wrestlers');

router.get('/', async (req, res) => {
    const wrestlers = await Wrestler.find();
    res.status(200).json(wrestlers);
});

router.post('/', async (req, res) => {
    try {
        const wrestler = await Wrestler.create(req.body);
        res.status(200).json(wrestler);
    } catch (err) {
        console.log(err);
        res.status(400).json({ err: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const wrestler = await Wrestler.findByIdAndRemove(req.params.id);
        res.status(200).json(wrestler);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const wrestler = await Wrestler.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(wrestler);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ err: err.message });
    }
});

module.exports = router;
