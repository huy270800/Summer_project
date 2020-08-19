class Weather {
    constructor(city, state) {
            this.apiKey = 'c834c5c16a5640bea04124339201608'
            this.city = city;
            this.state = state;
        }
        //fetch API from Open weather


    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`)
        const responseData = await response.json();
        return responseData
    }
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}