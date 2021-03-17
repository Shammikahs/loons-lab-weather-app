// API key for Weather Data
const key = "a1499b64e333d5045e07a6b2616e31cb";

// // URL for getting Weather Data for Colombo city
// const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${key}`;
// // https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=a1499b64e333d5045e07a6b2616e31cb
// // // // Fetching Data of city colombo
// fetch(baseURL).then((data) => { console.log("response :", data) });

const requestCoordinates = async(lat, lon) => {

    const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
    const query = `?lat=${lat}&lon=${lon}&appid=${key}`;

    //Making Fetch Call (Promise Call)
    const response = await fetch(baseURL + query);

    //promise Data
    const data = await response.json();


    return data;

}

requestCoordinates(35, 139);