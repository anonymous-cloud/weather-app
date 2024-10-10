// http://api.weatherapi.com/v1/current.json?key=11edd0207d624f438a9113417242309&q=London&aqi=no

const tempField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".condition");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");


form.addEventListener('submit', searchForLocation)
let target = 'mumbai';
const fetchResult = async (targetLocation) => {

    let url = `http://api.weatherapi.com/v1/current.json?key=11edd0207d624f438a9113417242309&q=${targetLocation}&aqi=no`;
    
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

    let locationName  = data.location.name;

    let temp = data.current.temp_c;

    let time = data.location.localtime;

    let condition = data.current.condition.text;
    updateDetails(locationName,temp,time,condition)
   
}

function updateDetails(locationName,temp,time,condition){
    tempField.innerText = temp;
    locationField.innerText = locationName;
    dateField.innerText = time;
   conditionField.innerText = condition;

}

function searchForLocation(e){

    e.preventDefault();

    target = searchField.value;
    fetchResult(target);
}

fetchResult(target);
