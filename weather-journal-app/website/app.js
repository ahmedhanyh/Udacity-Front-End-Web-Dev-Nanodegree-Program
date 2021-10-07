// Personal API Key for OpenWeatherMap API
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = '&APPID=86a265bad4b9f62b751292b45e1cbdae&units=imperial';


// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', displayWeatherInfo);

/* Function called by event listener */
function displayWeatherInfo() {
    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = `${(d.getMonth() + 1)}.${d.getDate()}.${d.getFullYear()}`;
    const zipCode = document.querySelector('#zip').value;
    const userResponse = document.querySelector('#feelings').value;
    getWeatherData(BASE_URL + zipCode + API_KEY)
    .then(data => {
        postData('/all', {temperature: data.main.temp, date: newDate, userResponse: userResponse});
        updateUI();
    });
}

/* Function to GET Web API Data*/
async function getWeatherData(url) {
    const response = await fetch(url);
    try {
        const weatherData = await response.json();
        return weatherData;
    } catch(error) {
        console.log("Error:", error);
    }
}

/* Function to POST data */
async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

/* Function to GET Project Data */
async function getProjectData() {
    const response = await fetch('/all');
    try {
        const allData = await response.json();
        return allData;
    } catch(error) {
        console.log("Error:", error);
    }
}

/* Function to Update UI */
async function updateUI() {
    try {
        const data = await getProjectData();
        const lastEntry = data[Object.keys(data)[Object.keys(data).length - 1]];
        document.querySelector('#date').innerHTML = 'Date: ' + lastEntry.date;
        document.querySelector('#temp').innerHTML = 'Temperature: ' + lastEntry.temperature;
        document.querySelector('#content').innerHTML = 'Feelings: ' + lastEntry.userResponse;
    } catch(error) {
        console.log("Error:", error);
    }
}
