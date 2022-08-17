const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applications');
const isLoggedIn = require('../config/auth');

router.get('/', applicationController.index);
router.get('/new', isLoggedIn, applicationController.new);

router.get('/id', applicationController.show);
router.get('/:id/edit', isLoggedIn, applicationController.edit);
router.post('/', isLoggedIn, applicationController.create);
router.delete('/:id', isLoggedIn, applicationController.delete);
router.put('/:id', isLoggedIn, applicationController.update);

module.exports = router;