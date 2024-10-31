const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '488cd8a98dmsh1ee8a4c94fff7aap1580e2jsn2339891d9c0c',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  const cityName = document.getElementById('cityName'); // Assuming you have an HTML element with the ID "cityName"
  
  const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
        document.getElementById('temp').innerHTML = response.temp;
        document.getElementById('temp2').innerHTML = response.temp;
        document.getElementById('feels_like').innerHTML = response.feels_like;
        document.getElementById('humidity').innerHTML = response.humidity;
        document.getElementById('humidity2').innerHTML = response.humidity;
        document.getElementById('min_temp').innerHTML = response.min_temp;
        document.getElementById('max_temp').innerHTML = response.max_temp;
        document.getElementById('wind_speed').innerHTML = response.wind_speed;
        document.getElementById('wind_speed2').innerHTML = response.wind_speed;
        //document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
       // Convert sunrise timestamp to time
       let sunriseDate = new Date(response.sunrise * 1000);
       let sunriseTimeString = `${sunriseDate.getUTCHours()}:${sunriseDate.getUTCMinutes()}:${sunriseDate.getUTCSeconds()}`;
       document.getElementById('sunrise').innerHTML = sunriseTimeString;

       // Convert sunset timestamp to time
       let sunsetDate = new Date(response.sunset * 1000);
       let sunsetTimeString = `${sunsetDate.getUTCHours()}:${sunsetDate.getUTCMinutes()}:${sunsetDate.getUTCSeconds()}`;
       document.getElementById('sunset').innerHTML = sunsetTimeString;
      })
      .catch((err) => console.error(err));
  };
  
  const SubmitEvent = document.getElementById('submit'); // Assuming you have an HTML element with the ID "submit"
  const cityInput = document.getElementById('city'); // Assuming you have an HTML input element with the ID "city"
  
  SubmitEvent.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(cityInput.value);
  });
  
  // You can call getWeather with a default city when the page loads
  getWeather('Delhi');
  



// Get all the dropdown items
const dropdownItems = document.querySelectorAll('.dropdown-item');
// Attach click event listener to each item
dropdownItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default <a> click behavior

        const city = this.getAttribute('data-city'); // Get the city from the custom attribute

        
        getWeather(city);
    });
});


const cities = ['Kolkata','Chennai', 'Mumbai', 'Bangalore'];
cities.forEach(city => {
 fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)

    .then(response => response.json())
    .then(data => populateData(data, city))
    .catch(error => console.error('Error fetching data for ' + city + ':', error));
});
function populateData(data, city) {
 const prefix = city.toLowerCase();

 document.getElementById(`${prefix}_cloud_pct`).innerHTML = data.cloud_pct;
 document.getElementById(`${prefix}_feels_like`).innerHTML = data.feels_like;
 document.getElementById(`${prefix}_humidity`).innerHTML = data.humidity;
 document.getElementById(`${prefix}_min_temp`).innerHTML = data.min_temp;
 document.getElementById(`${prefix}_max_temp`).innerHTML = data.max_temp;
  // Convert sunrise timestamp to time
  let sunriseDate = new Date(data.sunrise * 1000);
  let sunriseTimeString = `${sunriseDate.getUTCHours()}:${sunriseDate.getUTCMinutes()}:${sunriseDate.getUTCSeconds()}`;
  document.getElementById(`${prefix}_sunrise`).innerHTML = sunriseTimeString;

  // Convert sunset timestamp to time
  let sunsetDate = new Date(data.sunset * 1000);
  let sunsetTimeString = `${sunsetDate.getUTCHours()}:${sunsetDate.getUTCMinutes()}:${sunsetDate.getUTCSeconds()}`;
  document.getElementById(`${prefix}_sunset`).innerHTML = sunsetTimeString;
 document.getElementById(`${prefix}_temp`).innerHTML = data.temp;
 document.getElementById(`${prefix}_wind_degrees`).innerHTML = data.wind_degrees;
 document.getElementById(`${prefix}_wind_speed`).innerHTML = data.wind_speed;
}

document.getElementById('darkModeToggle').addEventListener('click', function() {
  const body = document.body;

  // Toggle the dark mode class
  if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
  } else {
      body.classList.add('dark-mode');
  }
});
