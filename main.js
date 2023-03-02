let a;
let b;
async function getWeatherData() { //asynchronous function
            
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${a}&aqi=no`)
            .then( function (res) {
                    console.log(res);
                    return res.json()
                }
            );
            console.log('response', response);
            console.log(response.location);
            document.getElementById("headerTop").innerHTML = response.location.name;
            b = response.current.condition.icon;
            // weather logo
            document.getElementById("weatherImage").innerHTML = `<img class="weather-logo" src="${b}" alt="no-weather">`
            // temperature
            document.getElementById("temp").innerHTML = `<span class="celsius">${response.current.temp_f}°</span> </br> <span class="feel">Feels Like ${parseInt(response.current.temp_f-3)}°</span>`;
            // latitude/longitude
            document.getElementById("coordinate").innerHTML = `Lat: ${response.location.lat}° &emsp; Long: ${response.location.lon}°` ;
            document.getElementById("description").innerHTML = `Make the most of this nice Weather that I generated for you.`;
            console.log(response.location.country);
            
        }
        function result() {
            a=document.getElementById("place").value;
            console.log(a);
            getWeatherData();
            document.getElementById("place").value = "";
        }
        