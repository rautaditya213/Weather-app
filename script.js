const apikey="e40aaf9f082f810bbed32b4b21ad8d68";
let humidity=document.getElementById("humidity")
let main=document.getElementById("main")
let city=document.getElementById("city")
let temp=document.getElementById("temp")

async function checkWeather(){
    let input=document.getElementById("input");
    let value=input.value;
    console.log("value is",value);
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${value}`;
    const response =await fetch(apiurl +`&appid=${apikey}`)
    var data= await response.json();
    console.log(data);
    if(data.cod!="404"){main.style.display="block"
         noentry.style.display="none"}
    else{
        main.style.display="none"
        noentry.style.display="block"
    }
    console.log(data.main.humidity)
    humidity.innerHTML=data.main.humidity+"%"
    console.log(humidity)

    console.log(data.wind.speed)
    speed.innerHTML=data.wind.speed+"Km/h"
    console.log(speed)

     console.log(data.main.temp)
     temp.innerHTML=data.main.temp+"°C"
     console.log(temp)

    
    city.innerHTML=value
    console.log(value)
}

let speed=document.getElementById("wind")

let button = document.getElementById("submit");
button.addEventListener("click",checkWeather);
