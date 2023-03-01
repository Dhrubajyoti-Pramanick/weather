async function getWeatherData() { //asynchronous function
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=Jaipur&aqi=no")
            .then( function (res) {
                    console.log(res);
                    return res.json()
                }
            );
            console.log('response', response);
            console.log(response.location);
            document.getElementById("headerTop").innerHTML = response.location.country;
            if(response.current.temp_f<=75){
                document.getElementById("weatherImage").innerHTML = `<img class="cloud" src="./images/cloudy1.webp" alt="cloudy-weather">`
            } else {
                document.getElementById("weatherImage").innerHTML = `<img class="cloud" src="./images/sunny.png" alt="sunny-weather">`
            }
            document.getElementById("temp").innerHTML = `<span class="celsius">${response.current.temp_f}°</span> </br> Feels Like ${response.current.temp_f-3}°`;
            document.getElementById("coordinate").innerHTML = `Lat: ${response.location.lat}° Long: ${response.location.lon}°` ;
            console.log(response.location.country);
        }
        getWeatherData();