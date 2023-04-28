const express = require('express');
const router = express.Router();
const countryController = require('../Controllers/country');
const bodyparser = require('body-parser');
const cors = require('cors');

router.use(express.json());
router.use(cors());
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

router.get('/:country', countryController.getCountry);

module.exports = router;