// inject current year in footer
const time = new Date();
console.log(time.getFullYear())
document.querySelector('#year').textContent = time.getFullYear();


const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {

    pw.classList.toggle('moreOver');

})


import {testimo} from "../js/testimo.js";
console.log(testimo)

const hotelCards= document.querySelector('#cards')

testimo.forEach(hotel => { 

    const mySection = document.createElement('section')
    
    const theImage = document.createElement("img")
    theImage.src = `images/${hotel.photo}`
    theImage.alt = hotel.name

    const theName = document.createElement("h2")
    theName.textContent = hotel.name

    const theAddress = document.createElement("address");
    theAddress.innerHTML = `${hotel.direc[0]}<br>${hotel.direc[1]}`;

    const thePhone = document.createElement("a");
    thePhone.textContent = hotel.phone
    thePhone.href = `tel:${hotel.phone}`

    
// crear loop para poner imagen o icon el numero de veces de rating - se crea y se pone la imagen dentro





    mySection.appendChild(theImage)
    mySection.appendChild(theName)

    mySection.appendChild(theAddress)
    mySection.appendChild(thePhone)

    hotelCards.appendChild(mySection)

});


