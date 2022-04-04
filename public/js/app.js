// display a message
// console.log('Client Side Content loaded from app.js');

// fetch
	// fetch a URL
	// when a promise is fulfilled, you successfully connect to the URL
	// then send information back.
/*
fetch('url').then((response) = {
	function....
})

*/

// aim the js at the form in the index.hbs
let weatherForm = document.querySelector('form');
let search = document.querySelector('input');

let message1 = document.querySelector('#message1');
let message2 = document.querySelector('#message2');
let message3 = document.querySelector('#message3');
let message4 = document.querySelector('#message4');


let cityState = document.querySelector('#cityState');
let currentWeather = document.querySelector('#currentWeather');
let currentTemp = document.querySelector('#currentTemp');
let feelsLikeTemp = document.querySelector('#feelsLikeTemp');
let currentTime = document.querySelector('#currentTime');


// add action to the form
weatherForm.addEventListener('submit', (e) => {
	e.preventDefault(); // keeps the page from refreshing when the button is clicked
	//console.log('testing'); // tests the button's action
	
	// grab the value from the text field (input)
	let city = search.value;
	
	//console.log(city); // display the city entered
	message1.textContent = 'Loading...';
	message2.textContent = '';
	message3.textContent = '';
	message4.textContent = '';
	
	cityState.textContent = '';
	currentWeather.textContent = '';
	currentTemp.textContent = '';
	feelsLikeTemp.textContent = '';
	currentTime.textContent = '';
	
	// use fetch to display the weather conditions for the city of choice
	fetch('/weather?city='+city).then((response) => {
	// jsonify the response
	response.json().then((data) => {
		//console.log(data);
		if(data.error)
			console.log(error);
		else
		{
			message1.textContent = "Current Weather Conditions for:"; 
			cityState.textContent = data.weather.currentCity + ", "  + data.weather.currentState;
			currentWeather.textContent = data.weather.currentDescription;
			
			message2.textContent = "Current Temperature: ";
			currentTemp.textContent = data.weather.currentTemp + "° F";
			
			message3.textContent = "Feels Like Temperature: ";
			feelsLikeTemp.textContent = data.weather.feelsLikeTemp + "° F";
			
			message4.textContent = "Local " + data.weather.currentCity + ", "  + data.weather.currentState + " Time:";
			currentTime.textContent = data.weather.time;
			
		}
		
		
	});
});
	
});


