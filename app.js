const cityForm = document.querySelector("form")

const card = document.querySelector(".card");

const details = document.querySelector(".details")

const updateUI = (data) => {
    // console.log(data)
    //  const cityDets = data.cityDets;
    //  const weather = data.weather;

    // destructuring
    const {cityDets, weather} = data;
    //  update details template
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>

                </div>
    `
}
const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return{cityDets,weather}
};

cityForm.addEventListener("submit", e => {
    // prevent default actions
    e.preventDefault()

    // get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()

    // update to the UI
    updateCity(city)
    .then (data  => updateUI(data))
    .catch(err => console.log (err));
});