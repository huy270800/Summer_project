//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

// Init object 
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI
const ui = new UI();
//get weather from on DOM load 
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //change location
    weather.changeLocation(city, state);
    //Set location
    storage.setLocationData(city, state);

    //get and display weather
    getWeather();

    //Close Modal
    $('#locModal').modal('hide');


})


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);

        })
        .catch(err => console.log(err));

}