import { HashTable } from './hashtable.js';
import { Router } from './router.js';


window.onload = function () {
  class Model {
    constructor() { 
      var users=new HashTable(10);
      
    }
  }

  class View {
    constructor() {
      const slideOpener = document.querySelector('.slide-opener');
      const slideCloser = document.querySelector('.slide-closer');
      slideOpener.addEventListener('click', openSlider);
      slideCloser.addEventListener('click', closeSlider);

      function openSlider() {
        let slider = document.getElementById('sign-in-slide');
        slider.style.display = "block";
      }

      function closeSlider() {
        let slider = document.getElementById('sign-in-slide');
        slider.style.display = "none";
      }
      // this.routing();
    }

    routing = function () {
      var router = new Router();
      router.addRoute("./ticket-booking.html", "ticket");
      // router.displayRoutes();
    }
    // signUp{

    // }




  }

  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }

  }
  const app = new Controller(new Model(), new View())

}






// //Ticket booking
// const container = document.querySelector('.container');
// const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// const row = document.querySelector('.row');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');
// const slideshow = document.getElementById('slideshow');

// if(movieSelect){
// let ticketPrice = +movieSelect.value;
// }

// moviesList=["Movie 1 (Rs 200)","Movie 2 (Rs 300)"];
// moviesPriceList=[200,300];
// movieSelectStr=`<option value="" selected disabled hidden>Choose here</option>`;

// const AvailableSeat = `<div class="seat"></div>`
// const OccupiedSeat = `<div class="seat occupied"></div>`


// moviesList.forEach(function(movie,index){
//     var price = moviesPriceList[index];
//     movieSelectStr+=`<option value="`+String(price)+`">`+movie+`</option>`

// });
// if(movieSelect){
// movieSelect.innerHTML=movieSelectStr;
// }

// //Update total and count
// function updateSelectedCount() {
//   const selectedSeats = document.querySelectorAll('.row .seat.selected');
//   const selectedSeatsCount = selectedSeats.length;
//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * ticketPrice;
// }

// //Movie Select Event
// if(movieSelect){

// movieSelect.addEventListener('change', e => {
//   ticketPrice = +e.target.value;
//   updateSelectedCount();
// });
// }

// //Seat click event
// if(container){

// container.addEventListener('click', e => {
//   if (e.target.classList.contains('seat') &&
//      !e.target.classList.contains('occupied')) {
//     e.target.classList.toggle('selected');
//   }
//   updateSelectedCount();
// });
// }

