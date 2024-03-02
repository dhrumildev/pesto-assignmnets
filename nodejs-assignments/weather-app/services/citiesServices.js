const axios = require('axios');
const openWeatherAPi = process.env.OPEN_WEATHER_API || "81fb85b728b54f390242c6964f543b93"


async function getLatLongByCity(cityName) {
    try {
        var config = {
            method: 'get',
            url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${openWeatherAPi}`,
            headers: {}
        };

        const latLongRes = await axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });


        return {
            "data": {
                "cityName": latLongRes[0].name,
                "lat": latLongRes[0].lat,
                "lon": latLongRes[0].lon,
                "country": latLongRes[0].country || "",
                "state": latLongRes[0].state || ""

            }

        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = getLatLongByCity;