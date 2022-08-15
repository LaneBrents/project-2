const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applications');
const isLoggedIn = require('../config/auth');

router.get('/', applicationController.index);
router.get('/new', isLoggedIn, applicationController.new);

router.get('/id', applicationController.show);
router.post('/', isLoggedIn, applicationController.create);

module.exports = router;