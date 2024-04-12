// Values
const searchButton = $('.search-button');
let city;
let temp;
let windSpeed;
let humidity;
let lastSearchedCity = localStorage.getItem('searchedCities');
let storedWeather = JSON.parse(localStorage.getItem('storedWeather')) || [];

// API key should be hard coded in the code for this exercise
const apiKey = '42cd44b4f4caae9205e5f8d0512b939c'

function getWeather() {

  console.log('searching weather')
  city = encodeURIComponent($('.search-city').val())
  console.log(city)
  // Make the API call
  const queryURL =  `httpsapi.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial&cnt=5`;

  fetch(queryURL)
    .then (response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return
      }
      
    response.json()
    .then (data => {
      let searchedCity = data.list;
      console.log("This is the seached city")
      console.log(searchedCity)

      // Store the city name and weather data in localStorage
      for (let weatherResult of searchedCity) {
        var cityWeather = {
          city: city,
          date: weatherResult.dt_txt,
          temp: weatherResult.main.temp,
          humidity: weatherResult.main.humidity,
          wind: weatherResult.wind.speed,
        }

        storedWeather.push(cityWeather);
      }      

      localStorage.setItem('storedWeather', JSON.stringify(cityWeather));
      console.log("this is the stored weather")
      console.log(storedWeather)
    })

  });

}

// Press enter to search
// $('.search-city').keypress(function(event) {
//   if (event.keyCode === 13) {
//     $('.search-button').click();
//   }
// });

// Click on the search button to search


function displayWeather() {
  var lastWeather = JSON.parse(localStorage.getItem('storedWeather'));
  console.log("This is the last weather")
  console.log(lastWeather)
}

// add a function to run the api call
// add a function create to store the localstorage and add new div for the list item and weather data
// add a function to display the weather data on the page
// when a page is loaded, run things
$(searchButton).on('click',getWeather)

$(document).ready(function () {
 
  $(document).ready(function () {
    $('.search-button').on('click', function() {
      console.log('Button was clicked');
    });
  });
  
});
 