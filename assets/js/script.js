// Values
let city;
let temp;
let windSpeed;
let humidity;
let weatherArray = []
let weatherData;

// Afte clicking on the search button, get the city name from the input field and start API call 

// Store the city name and weather data in localStorage
$('.search-button').on('click', function() {
  city = encodeURIComponent($('.search-city').val());
  let apiKey = encodeURIComponent($('.api-key').val());


  console.log('click');
  console.log(city);
  console.log(apiKey);

  // Make the API call
  // const queryURL =  `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial&cnt=5`;

  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=draper&appid=42cd44b4f4caae9205e5f8d0512b939c&units=imperial&cnt=5`;
  console.log(queryURL);

  fetch(queryURL)
    .then (response => response.json())
    .then (data => {

      weatherArray = data.list;
      console.log(weatherArray);
      
      temp = data.main.temp;
      windSpeed = data.wind.speed;
      humidity = data.main.humidity;

      console.log(data);
      console.log(data.main.temp);
      console.log(data.wind.speed);
      console.log(data.main.humidity);
    })

    for (weatherData of weatherArray) {
      weatherArray.push(weatherData.main.temp);
      weatherArray.push(weatherData.wind.speed);
      weatherArray.push(weatherData.main.humidity);
      weatherArray.push(weatherData.dt_txt);

      console.log(weatherData.main.temp);

      
      
    }
    // Convert the array to a string and store it in localStorage
localStorage.setItem('weatherArray', JSON.stringify(weatherArray));

// When retrieving the array from localStorage, convert it back to an array
let storedWeatherArray = JSON.parse(localStorage.getItem('weatherArray'));




    console.log(weatherData)
    


    localStorage.setItem('city', city);
});

// Show the city name and weather on the page
$('.city-name').text(city);
$('.weather').text(''); // Add the weather data here


///needs to be dynamic when page is loaded