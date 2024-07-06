function converterFahrenheitParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return celsius;
}


let temperaturaFahrenheit = 68; 
let temperaturaCelsius = converterFahrenheitParaCelsius(temperaturaFahrenheit);
console.log(`${temperaturaFahrenheit} graus Fahrenheit correspondem a ${temperaturaCelsius.toFixed(2)} graus Celsius.`);
