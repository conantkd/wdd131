let temperatureData = parseFloat(document.querySelector(".temperature-cell").textContent);
let windSpeedData = parseFloat(document.querySelector(".wind-speed").textContent);
let windChillElement = document.querySelector(".wind-chill");

function calculateWindChill(temperature,windSpeed) {
    const windChill = 
      13.12 + 
      (0.6215 * temperature) - 
      (11.37 * Math.pow(windSpeed, 0.16)) + 
      (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    
    return windChill.toFixed(1)
}

if (temperatureData <= 10 && windSpeedData > 4.8) {
        windChillElement.textContent =` ${calculateWindChill(temperatureData,windSpeedData)} °C` 
}