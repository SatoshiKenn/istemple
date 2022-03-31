//const apiURL =
  //"https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=3755650b1c53c50d6c91c306ae05d912&units=metric";

const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=39.67932982820806&lon=-77.0035273345371&exclude=hourly,daily&appid=3755650b1c53c50d6c91c306ae05d912&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector("#t").textContent = jsObject.current.temp.toFixed(1);
    document.querySelector("#c").textContent = jsObject.current.weather[0].description;
    document.querySelector("#h").textContent = jsObject.current.humidity;
  });
