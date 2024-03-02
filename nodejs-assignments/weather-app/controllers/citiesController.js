const express = require('express');
const router = express.Router();
const getLangLongByCity = require('../services/citiesServices')
// GET /cities
router.get('/', async (req, res) => {
    try {
        const cityName = req.query.cityName;
        let latLong = await getLangLongByCity(cityName)
        console.log("step0====", latLong)
        res.json({ message: 'Weather data for multiple cities' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;