var request = require('request');

let weather = (city, callback) => {
	var url = 'http://api.weatherstack.com/current?access_key=6c90e2ec96a4e3682ff676c7c6d9c53c&query='+ city +'&units=f';

	request({url: url, json: true}, (error, response) => {
		if(error)
		{
			// low level errors
			callback("Unable to connect to the Weather API");
		}
		else if(response.body.error)
		{
			// checks to see if we have an API level error
			callback(`${response.body.error.info}`);
		}
		else
		{
			// callback
			callback(undefined, {
				currentCity: response.body.location.name,
				currentState: response.body.location.region,
				currentDescription: response.body.current.weather_descriptions[0],
				currentTemp: response.body.current.temperature,
				feelsLikeTemp: response.body.current.feelslike,
				lat: response.body.location.lat,
				lon: response.body.location.lon,
				time: response.body.location.localtime
			});
		}
	});
};

module.exports = weather;