const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/submit', formController.form_submit);
router.get('/forms', formController.get_forms);

module.exports = router;

