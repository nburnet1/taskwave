const express = require('express');
const router = express.Router();
const jsonWaves = require('./db.json');

router.get('/api/wave/:id/tasks', (req, res) => {
    res.send(jsonWaves);
});

router.get('/api/wave/:id/task/:id', (req, res) => {
    const wave = jsonWaves.find(w => w.id === parseInt(req.params.id));
    if (!wave) res.status(404).send('The wave with the given ID was not found.');
    res.send(wave);
});

module.exports = router;
