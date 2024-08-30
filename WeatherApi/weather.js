//all three content
let input=document.querySelector("input");
let btn=document.querySelector("button");
let cont=document.querySelector("#cont");

console.log(input,btn,cont);

btn.addEventListener("click", async(e) => {
    cont.innerHTML="";
    let key=`7dae760de94705e018b4df28f76700db`
    let dataFromServer=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}`);

    if (dataFromServer.status==200) {
    let data=await dataFromServer.json();
    let CityName=document.createElement("h3");
    let Temp=document.createElement("h3");
    let Climate=document.createElement("h3");
    let Windspeed=document.createElement("h3");
    let humidity=document.createElement("h3");
   
    CityName.innerHTML=`City Name: ${data.name}`;
    Temp.innerHTML=`Temperature: ${(data.main.temp-273).toFixed(2)}℃`;
    Climate.innerHTML=`Climate: ${data.weather[0].main}`;
    Windspeed.innerHTML=`wind speed: ${data.wind.speed}km/hr`;
    humidity.innerHTML=`Humidity: ${data.main.humidity}%`;

    cont.append(CityName, Temp, Climate, Windspeed, humidity);
    } else {
        let error=document.createElement("h3");
        error.innerHTML="Enter the valid input";
        cont.append(error);
    }

    console.log(dataFromServer);
    console.log(data);
    
    
})
