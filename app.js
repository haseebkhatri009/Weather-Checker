const form = document.querySelector("#form");
const messageDiv = document.querySelector("#message");
const result = document.querySelector("#result");
const temp = document.querySelector("#temp");
const name = document.querySelector("#cityName");
const humidity = document.querySelector("#humidity");
const error = document.querySelector("#error");
// const imageUrl = './';    
const imageUrl = document.querySelector("#myImage").src; // Get the image URL


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    temp.innerText = "";
    name.innerText = "";
    humidity.innerText = "";
    error.innerText = "";
    
    // messageDiv.innerText = "Loading";
    messageDiv.innerHTML = `<img id="img" src="${imageUrl}" alt="Description of Image" class="image" />`;
    console.log(messageDiv);
    
    let apiKey = "ad66066f121ffc1415f9a0c27fc411c1";
    const value = event.target.children[0].value;
    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`

    try {
        const response = await axios(API);
        console.log(response);
        temp.innerHTML =  `<strong>Current-Temperature: </strong>` + response.data.main.temp + ` <span>°C</span>`;
        name.innerHTML = `<strong>City Name: </strong>`+ response.data.name;
        humidity.innerHTML =  `<strong>Humidity: </strong>` + response.data.main.humidity;
        messageDiv.innerText = "";
        
    }catch (err){
        console.log(err);
        messageDiv.innerText = "";
        error.innerText = "City Not Found";
        temp.innerText = "";
        name.innerText = "";
        humidity.innerText = "";
    } 
    
})



// let city = "lahore";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;