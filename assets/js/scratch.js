const searchButton = $('.search-button');
const searchCity = $('.search-city');
console.log(searchCity.val())

localStorage.setItem('storedWeather', JSON.stringify(searchCity));
console.log("this is the stored weather")