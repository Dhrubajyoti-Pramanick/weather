let locate;
async function getWeatherData() {
  //asynchronous function

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${locate}&aqi=no`
  ).then(function (res) {
    console.log(res);
    return res.json();
  });
  console.log("response", response);
  console.log(response.location);
  console.log(response.current);
  document.getElementById("place").value = response.location.name;

  if (response.current.condition.text == "Sunny") {
    document.getElementById(
      "weatherImage"
    ).innerHTML = `<img class="weather-logo" src="./images/sunny.svg">`;
  } else if (response.current.condition.text == "Rainy") {
    document.getElementById(
      "weatherImage"
    ).innerHTML = `<img class="weather-logo" src="./images/rainy.svg">`;
  } else if (response.current.condition.text == "Partly cloudy") {
    document.getElementById(
      "weatherImage"
    ).innerHTML = `<img class="weather-logo" src="./images/partlyCloudy.svg">`;
  } else {
    document.getElementById(
      "weatherImage"
    ).innerHTML = `<img class="weather-logo" src="./images/cloudy.svg">`;
  }

  // temperature
  document.getElementById("temp").innerHTML = `<span class="celsius">${
    response.current.temp_f
  }°</span> <br/> <span class="feel">Feels Like ${parseInt(
    response.current.temp_f - 3
  )}°</span>`;
  document.getElementById(
    "description"
  ).innerHTML = `<p class="text-descrip">Make the most of this nice Weather that I generated for you. Or else.</p>`;
  console.log(response.location.country);
}

// blink
// var cursor = true;
// var speed = 1800;
// let interval = setInterval(() => {
//   if(cursor) {
//     document.getElementById('place').style.opacity = 0;
//     cursor = false;
//   }else {
//     document.getElementById('place').style.opacity = 1;
//     cursor = true;
//   }
// }, speed);

document.getElementById("place").addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    locate = document.getElementById("place").value;
    console.log(locate);
    getWeatherData();

    //stop blink
    // clearInterval(interval);
    // document.getElementById('place').style.opacity = 1;
  }
});
