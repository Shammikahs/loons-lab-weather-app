const searchForm = document.querySelector('.search-location');
const cords = document.querySelector('.search-location input');
const details = document.querySelector('.details');
const today = document.querySelector('.today');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const firstDay = document.querySelector('#firstDay');
const secondDay = document.querySelector('#secondDay');
const thirdDay = document.querySelector('#thirdDay');
const fifthDay = document.querySelector('#fifthDay');
const sixthDay = document.querySelector('#sixthDay');

//onload weather data
window.addEventListener("load", () => {
    //Making request
    requestCoordinates(6.927079, 79.861244)
        .then((data) => {
            updateWeather(data);
        })
        .catch((error) => { console.log(error) });
});



//Add an event to the listner
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const coordinates = cords.value.trim();
    console.log(coordinates);
    searchForm.reset();

    // getting the values of lon and lat seperately
    const lat = splitCoordinate(coordinates)[0];
    const lon = splitCoordinate(coordinates)[1];
    console.log("coordinates", lat, lon);

    //Making request
    requestCoordinates(lat, lon)
        .then((data) => {
            updateWeather(data);
        })
        .catch((error) => { console.log(error) });
});

//split the coordinates from the user enter values
function splitCoordinate(cordi) {
    const arr = cordi.split(",");
    return arr;
}

//Converting Temperture Values getting from API
function kelvinToCelcies(kelvin) {
    const celcies = Math.round(kelvin - 273.15);
    return celcies;

}

//updating the weather data from data getting from api

function updateWeather(cords) {

    const imageFirstDay = cords.list[2].weather[0].icon;
    const iconSrcDay1 = `http://openweathermap.org/img/wn/${imageFirstDay}@2x.png`;

    const imageSecondDay = cords.list[14].weather[0].icon;
    const iconSrcDay2 = `http://openweathermap.org/img/wn/${imageSecondDay}@2x.png`;

    const imageThirdDay = cords.list[22].weather[0].icon;
    const iconSrcDay3 = `http://openweathermap.org/img/wn/${imageThirdDay}@2x.png`;

    //updating the Main Display
    details.innerHTML = `
        <div class="today-weather">
            <div class="row justify-content-md-center">
                <div class="today">
                    <p class="today">Today</p>

                </div>
                <div class="city">
                    <p>${cords.city.name}</p>
                </div>
            </div>
        </div>

        <div class="main-temperature">
            <p>${kelvinToCelcies(cords.list[0].main.temp)}&deg;C</p>
        </div>`;
    //Updating Three Days
    first.innerHTML = `
        <div class="card-header header" style="
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;">
            <p class="date">${formatDate(cords.list[2].dt_txt)}</p>
        </div>
        <span class="temp">${kelvinToCelcies(cords.list[2].main.temp)}&deg;C</span>

        <p>${cords.list[2].weather[0].description}</p>`;

    second.innerHTML = `
        <div class="card-header header" style="
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;">
            <p class="date">${formatDate(cords.list[14].dt_txt)}</p>
        </div>
        <span class="temp">${kelvinToCelcies(cords.list[14].main.temp)}&deg;C</span>

        <p>${cords.list[14].weather[0].description}</p>                      
`;
    third.innerHTML = `
        <div class="card-header header" style="
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;">
            <p class="date">${formatDate(cords.list[22].dt_txt)}</p>
        </div>
               
        <span class="temp">${kelvinToCelcies(cords.list[22].main.temp)}&deg;C</span>

        <p>${cords.list[22].weather[0].description}</p>                      
        `;


    //Updating the Bottom Cards
    firstDay.innerHTML = `
            <div class="card-header header" style="
            border-top-left-radius: 30px;
            border-top-right-radius: 30px;">
                <p class="date">${formatDate(cords.list[2].dt_txt)}</p>
            </div>
            <p class="city">${cords.city.name}</p>

            <div class="bottom-weather-icon"> <img src="${iconSrcDay1}" alt=""></div>

            <span class="temp">${kelvinToCelcies(cords.list[2].main.temp)}&deg;C</span>

            <p>${cords.list[2].weather[0].description}</p>`;

    secondDay.innerHTML = `
            <div class="card-header header" style="
                border-top-left-radius: 30px;
                border-top-right-radius: 30px;">
                <p class="date">${formatDate(cords.list[14].dt_txt)}</p>
            </div>
            <p class="city">${cords.city.name}</p>

            <div class="bottom-weather-icon"><img src="${iconSrcDay2}" alt=""></div>

            <span class="temp">${kelvinToCelcies(cords.list[14].main.temp)}&deg;C</span>

            <p>${cords.list[14].weather[0].description}</p>                      
    `;
    thirdDay.innerHTML = `
    <div class="card-header header" style="
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;">
        <p class="date">${formatDate(cords.list[22].dt_txt)}</p>
    </div>
    <p class="city">${cords.city.name}</p>

    <div class="bottom-weather-icon"><img src="${iconSrcDay3}" alt=""></div>

    <span class="temp">${kelvinToCelcies(cords.list[22].main.temp)}&deg;C</span>

    <p>${cords.list[22].weather[0].description}</p>                      
    `;

    fifthDay.innerHTML = `
    <div class="card-header header" style="
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;">
        <p class="date">${formatDate(cords.list[26].dt_txt)}</p>
    </div>
    <p class="city">${cords.city.name}</p>

    <div class="bottom-weather-icon"><img src="${iconSrcDay3}" alt=""></div>

    <span class="temp">${kelvinToCelcies(cords.list[26].main.temp)}&deg;C</span>

    <p>${cords.list[26].weather[0].description}</p>                      
    `;
    sixthDay.innerHTML = `
    <div class="card-header header" style="
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;">
        <p class="date">${formatDate(cords.list[34].dt_txt)}</p>
    </div>
    <p class="city">${cords.city.name}</p>

    <div class="bottom-weather-icon"><img src="${iconSrcDay3}" alt=""></div>

    <span class="temp">${kelvinToCelcies(cords.list[34].main.temp)}&deg;C</span>

    <p>${cords.list[34].weather[0].description}</p>                      
    `;

}

function updateDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yy = String(today.getFullYear());

    var currentDate = dd + mm + yy;
    console.log(currentDate);

    return currentDate;
}

function formatDate(date) {

    var newDate = date.split(" ", 10);

    var dateString = newDate[0].split("-");
    var month = '';

    function getMonth(mm) {

        switch (mm) {
            case "01":
                month = "Jan";
                break;
            case "02":
                month = "Feb";
                break;
            case "03":
                month = "Mar";
                break;
            case "04":
                month = "Apr";
                break;
            case "05":
                month = "May";
                break;
            case "06":
                month = "Jun";
                break;
            case "07":
                month = "Jul";
                break;
            case "08":
                month = "Aug";
                break;
            case "09":
                month = "Sep";
                break;
            case "10":
                month = "Oct";
                break;
            case "11":
                month = "Nov";
                break;
            case "12":
                month = "Dec";
                break;
        }

        return month;
    }



    return getMonth(dateString[1]) + "/" + dateString[2];
}