const Api ={
    key:"d20a081d34fde7fe86c7e3f3420da6d4",
    baseUrl:"https://api.openweathermap.org/data/2.5/",
}
function getvalues(){
    let city = document.querySelector('.search-area').value;  
    setvalue(city);
}

let btn = document.querySelector(".search-btn");
btn.addEventListener('click', getvalues);


function setvalue(city){
    let result = fetch(`${Api.baseUrl}weather?q=${city}&appid=${Api.key}`).then(result2 => {
        return result2.json();
    }).then(getresult).then(show);
}
const kelvin =273;
function getresult(result2){
    console.log(result2);
    degree=Math.floor(result2.main.temp - kelvin);
    description =result2.weather[0].description;
    clouds=result2.weather[0].main;
    city =result2.name;
    country=result2.sys.country;
    
}
var Name= document.querySelector('.screen.name'); 
var temp = document.querySelector('.screen.temp');
var date = document.querySelector('.date.screen');
var desc = document.querySelector('.screen.desc');
var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
let history={};
function show() {
    Name.innerText = `${city},${country}`;
    temp.innerText = `${degree}° C`;
    date.innerText = `${today}`;
    desc.innerText = description;
    console.log(Name.innerHTML);
    console.log(temp.innerHTML);
    window.localStorage.clear();
    history[Name.innerHTML]=temp.innerHTML;
    console.log(history);
    window.localStorage.setItem(Name.innerHTML,temp.innerHTML);
    if(clouds === "Clouds"){
        document.body.style.backgroundImage = "url('1119564.jpg')";
        document.body.style.backgroundImage.size ='cover';
    }else{
        document.body.style.backgroundImage = "url('alessandro-erbetta-mpWPcRT9D1E-unsplash.jpg')";
    }
}
for(let pop in history){
    
}



// name.innerHtml = `${city},${country}`;
// temp.innerHTML = degree;
// date.innerHTML = Date.now();
// desc.innerHTML = description;