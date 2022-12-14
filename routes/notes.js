const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');

router.get('/applications/:id/notes', notesCtrl.new)
router.post('/applications/:id/notes', notesCtrl.create);
router.delete('/notes/:id', notesCtrl.delete);

module.exports = router;