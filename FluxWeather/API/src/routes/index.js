const express = require(`express`);
const router = express.Router();
const weatherController = require('../controllers/weatherController')


router.get('/now/:city', weatherController.get);
router.get('/save', weatherController.save);

module.exports = router;