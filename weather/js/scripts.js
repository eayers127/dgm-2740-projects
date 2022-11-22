
    const myDate = new Date();
    const todayDayNumber = myDate.getDay();
    const myWeekDay= new Array(7);
    myWeekDay[0] = "Sunday";
    myWeekDay[1] = "Monday";
    myWeekDay[2] = "Tuesday";
    myWeekDay[3] = "Wednesday";
    myWeekDay[4] = "Thursday";
    myWeekDay[5] = "Friday";
    myWeekDay[6] = "Saturday";

const apiURL ="//api.openweathermap.org/data/2.5/forecast?zip=84096,us&appid=6bab3bf5f6bb22bf47f7ca4c086b5bff&units=imperial"

fetch (apiURL)
.then((response)=> response.json())
.then((weatherInfo)=>{
    console.log(weatherInfo);

    document.getElementById('place').innerHTML=weatherInfo.city.name;
    // document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    // document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

    // const iconcode = weatherInfo.weather[0].icon;

    // const icon_path="//openweathermap.org/img/w/"+ iconcode +".png";
    // console.log(icon_path);

    // document.getElementById('weather_icon').src= icon_path;

    let myList = weatherInfo.list;

    let todayNumber = todayDayNumber;

for(i=0; i<myList.length;i++){
    let time = myList[i].dt_txt;
    if(time.includes('18:00:00')){
        todayNumber += 1;
        if(todayNumber === 7){
            todayNumber = 0;
        }

        let theDayName = document.createElement("span");
        theDayName.textContent = myWeekDay[todayNumber];
        theDayName.className = "day";

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";
        theTemp.className = "temp";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/"+ iconcode +".png";
        let theIcon = document.createElement("img")
        theIcon.src = iconPath;
        theIcon.className = "iconCard"

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);
        theDay.className = "dayCard";

        document.getElementById('weatherForecast').appendChild(theDay);
    }
}





});

//api.openweathermap.org/data/2.5/weather?id={city id}&appid=6bab3bf5f6bb22bf47f7ca4c086b5bff&units=imperial
////api.openweathermap.org/data/2.5/weather?zip=84096,us&appid=6bab3bf5f6bb22bf47f7ca4c086b5bff&units=imperial

//6bab3bf5f6bb22bf47f7ca4c086b5bff


const apiURL2 = "//api.openweathermap.org/data/2.5/forecast?zip=84096,us&appid=6bab3bf5f6bb22bf47f7ca4c086b5bff&units=imperial"