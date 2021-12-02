// what is the path to the JSON file?
const apiURL = "/hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
    for (let i = 0; i < myList.length; i++) {
      let myImg = document.createElement('img')
      myImg.src = myList[i].photo;

      let myFigCap = document.createElement('figcaption')
      myFigCap.textContent = myList[i].name;

      let myFigure = document.createElement('figure')
      myFigure.appendChild(myImg)
      myFigure.appendChild(myFigCap)

      let iconLeft = document.createElement('ion-icon')
      iconLeft.name = 'car'

      let addressOne = document.createElement('p')
      addressOne.textContent = myList[i].address[0]

      let addressTwo = document.createElement('p')
      addressTwo.textContent = myList[i].address[1]

      let iconRight = document.createElement('ion-icon')
      iconRight.name = 'call'

      let phone = document.createElement('p')
      phone.textContent = myList[i].phone

      let spanLeft = document.createElement('span')
      spanLeft.appendChild(iconLeft)
      spanLeft.appendChild(addressOne)
      spanLeft.appendChild(addressTwo)

      let spanRight = document.createElement('span')
      spanRight.appendChild(iconRight)
      spanRight.appendChild(phone)

      let cardDiv = document.createElement('div')
      cardDiv.appendChild(spanLeft)
      cardDiv.appendChild(spanRight)

      let cardSection = document.createElement('section')
      cardSection.appendChild(myFigure)
      cardSection.appendChild(cardDiv)

      document.getElementById('cards').appendChild(cardSection)
    }
    
    
    
    
    
    
    
}); //end of "then" fat arrow function