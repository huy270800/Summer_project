// Init object 
const weather = new Weather('Boston', 'US');

//Init UI
const ui = new UI();
//get weather from on DOM load 
document.addEventListener('DOMContentLoaded', getWeather());


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        })
        .catch(err => console.log(err));

}