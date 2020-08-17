// Init object 
const weather = new Weather('Oulu', 'Finaland');

//Init UI
const ui = new UI();
//get weather from on DOM load 
document.addEventListener('DOMContentLoaded', getWeather());
//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation('Miami', 'FL');

    //get and display weather

    getWeather();

    //Close modal

    $('#locModal').modal('hide');
})

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        })
        .catch(err => console.log(err));

}