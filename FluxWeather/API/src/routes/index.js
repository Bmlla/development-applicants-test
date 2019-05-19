const express = require(`express`);
const router = express.Router();
const weatherController = require('../controllers/weatherController')


router.get('/now/:city', weatherController.get);
router.post('/save_weather', weatherController.save_weather);

module.exports = router;