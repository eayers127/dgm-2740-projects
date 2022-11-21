// what is the path to the JSON file?
const apiURL = "./hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
for(i = 0; i < myList.length; i++){

  let theIconLeftTag = document.createElement("ion-icon");
  theIconLeftTag.className = "icon";

  let addressTag = document.createElement("p");
  addressTag.textContent = myList[i].address[0];

  let cityTag = document.createElement("p");
  cityTag.textContent = myList[i].address[1];

  let phoneTag = document.createElement("p");
  phoneTag.textContent = myList[i].phone;

  let cardInfo = document.createElement("div");
  cardInfo.className = "info";
  cardInfo.appendChild(addressTag);
  cardInfo.appendChild(phoneTag);
  cardInfo.appendChild(cityTag);

  let myCarIcon = document.createElement("img");
  myCarIcon.src = 
  myCarIcon.className = "icon"
  


    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;

    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    
    let divWrapper = document.createElement("div");
    divWrapper.className = "cardWrapper";
    document.getElementById('myCards').appendChild(myFigureTag);
    document.getElementById('myCards').appendChild(cardInfo);

    
}

    // myFigureTag.className = "happyCamper";
    // let theIconLeftTag;
    // theIconLeftTag.className = "icon"
    
    
    
    
    
}); //end of "then" fat arrow function
