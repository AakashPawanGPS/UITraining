var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var minmax = document.querySelector('.min-max')

input.addEventListener('keypress',function(event){
    if(event.key === "Enter"){
        button.click()
    }
})


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=8922527e6ab47a6b694a73decdd12e86&units=metric')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var tempValue = data['main']['temp'] + " °C";
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var minVal = data.main.temp_min;
            var maxVal = data.main.temp_max;

            main.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = "Temp - " + tempValue;
            input.value = "";
            minmax.innerHTML = `${minVal} °c - ${maxVal} °c`
        })

        .catch(err => alert("Wrong city name!"));
})



// 8922527e6ab47a6b694a73decdd12e86