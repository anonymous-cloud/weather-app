// http://api.weatherapi.com/v1/current.json?key=11edd0207d624f438a9113417242309&q=mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time-location p");
const dateField = document.querySelector(".time-location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search-area");
const searchButton = document.querySelector(".search-button");
const form = document.querySelector("form");

// get the data from apppi 


 form.addEventListener("submit", searchForLocation)

 let target = 'Lucknow'

const fetchResult = async(targetLocation)=>{

    const url = `http://api.weatherapi.com/v1/current.json?key=11edd0207d624f438a9113417242309&q=${targetLocation}&aqi=no`
    const res = await fetch(url);

    const data = await res.json();

    console.log(data);


    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c
    let condition = data.current.condition.text;

    updateDetails(temp,locationName,time,condition);

}

function updateDetails(temp,locationName,time,condition){

    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateField.innerText = time;
    weatherField.innerText = condition;
    }


function searchForLocation(e){
e.preventDefault()

target = searchField.value;

fetchResult(target);



}






fetchResult(target);