// const url=require('url');
let locate;
const dropDown = document.getElementsByClassName("dropDown");
let dropDown_place;
var cursor = true;
function reveal() {
  if (cursor) {
    document.getElementById("places").style.opacity = 1;
    cursor = false;
  } else {
    document.getElementById("places").style.opacity = 0;
    cursor = true;
  }
}

// const dropDown = document.getElementsByClassName("dropDown");
for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", () => {
    document.getElementById("place").value = dropDown[i].innerHTML;
    locate = document.getElementById("place").value;
    dropDown_place = dropDown[i];
    getWeatherData();

    if (cursor) {
      document.getElementById("places").style.opacity = 1;
      cursor = false;
    } else {
      document.getElementById("places").style.opacity = 0;
      cursor = true;
    }
  });
}
document.getElementById("place").addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    locate = document.getElementById("place").value;
    console.log(locate);
    getWeatherData();
  }
});

async function getWeatherData() {
  //asynchronous function
  const response = await fetch(
    `http://localhost:8000/weather/?myserver=${locate}`
  ).then(function (res) {
    console.log(res);
    return res.json();
  });
  console.log("response", response);
  console.log(response.location);
  console.log(response.condition);

  if (response.location === dropDown_place.innerHTML) {
    // js for custom api
    if (response.condition === "Sunny") {
      document.getElementById(
        "weatherImage"
      ).innerHTML = `<img class="weather-logo" src="./images/sunny.svg">`;
    } else if (response.condition === "Rainy") {
      document.getElementById(
        "weatherImage"
      ).innerHTML = `<img class="weather-logo" src="./images/rainy.svg">`;
    } else if (response.condition === "Partly cloudy") {
      document.getElementById(
        "weatherImage"
      ).innerHTML = `<img class="weather-logo" src="./images/partlyCloudy.svg">`;
    } else if (response.condition === "Overcast") {
      document.getElementById(
        "weatherImage"
      ).innerHTML = `<img class="weather-logo" src="./images/overcast.svg">`;
    } else if (response.condition === "Mist") {
      document.getElementById(
        "weatherImage"
      ).innerHTML = `<img class="weather-logo" src="./images/mist.svg">`;
    } else {
      document.getElementById(
        "weatherImage"
      ).innerHTML = `<img class="weather-logo" src="./images/cloudy.svg">`;
    }
    // // temperature js for custom api
    document.getElementById("temp").innerHTML = `<span class="celsius">${
      response.farhenheit
    }°F</span> <br/> <span class="feel">Feels Like ${parseInt(
      response.farhenheit - 3
    )}°F</span>`;
    document.getElementById(
      "description"
    ).innerHTML = `<p class="text-descrip">Make the most of this nice Weather that I generated for you. Or else.</p>`;
    console.log(response.farhenheit);
  }
}
