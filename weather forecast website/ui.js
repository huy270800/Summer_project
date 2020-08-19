class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {

        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.icon.setAttribute('src', weather.current.condition.icon)
        this.string.textContent = weather.current.temp_c + "°C" + ` (${weather.current.temp_f}) °F `;
        this.humidity.textContent = `Relative humidity: ${weather.current.humidity} %  `;
        this.feelslike.textContent = `Feels like: ${weather.current.feelslike_c} °C (${weather.current.feelslike_f}) °F`;
        this.pressure.textContent = `Pressure: ${weather.current.pressure_in} in`;
        this.wind.textContent = `Wind:  ${weather.current.wind_mph} m/s`;

    }
}