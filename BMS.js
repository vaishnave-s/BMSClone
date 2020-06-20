import { HashTable } from './hashtable.js';
import { Router } from './router.js';


window.onload = function () {
  class Model {
    constructor() {
      var users = new HashTable(10);

    }
  }

  class View {
    constructor() {
      console.log("ready");
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
      this.signInModal();
    }

    routing = function () {
      var router = new Router();
      router.addRoute("./ticket-booking.html", "ticket");
      // router.displayRoutes();
    }
    
    //Modal Start
    signInModal = function () {
      var modal = document.getElementById("signinModal");
      var btn = document.getElementById("modalTrigger");
      var closeModal = document.getElementsByClassName("closeModal")[0];

      btn.onclick = function () {
        modal.style.display = "block";
      }

      closeModal.onclick = function () {
        modal.style.display = "none";
        signInSection.style.display = "block";
        signUpSection.style.display = "none";
      }

      // When the user clicks anywhere outside of the modal, close it
      // window.onclick = function(event) {
      //   if (event.target == modal) {
      //     modal.style.display = "none";
      //   }
      // }
      var signInTab = document.getElementById("signIn");
      var signUpTab = document.getElementById("signUp");

      var signInSection = document.getElementById("sign-in-section");
      var signUpSection = document.getElementById("sign-up-section");

      var signInSubmit = document.getElementById("sign-in-submit");
      var signInEmail = document.getElementById("signInEmail");
      var signInPassword = document.getElementById("signInPassword");

      var signUpSubmit = document.getElementById("sign-up-submit");
      var signUpName = document.getElementById("signUpName");
      var signUpEmail = document.getElementById("signUpEmail");
      var signUpPassword = document.getElementById("signUpPassword");

      signUpTab.addEventListener('click', function () {
        event.preventDefault();
        signInSection.style.display = "none";
        signUpSection.style.display = "block";
      }, false);

      signInTab.addEventListener('click', function () {
        event.preventDefault();

        signInSection.style.display = "block";
        signUpSection.style.display = "none";
      }, false);


      //Valid email test regex
      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      signInSubmit.addEventListener('click', function () {
        if (signInEmail.value == "" && signInPassword.value == "") {
          alert('Please enter email and password.');
          event.preventDefault();
          return false;
        }
        else if (!validateEmail(signInEmail.value)) {
          alert('Please enter a valid email.');
          event.preventDefault();
          return false;
        }
        // else{

        // }
      });

      signUpSubmit.addEventListener('click', function () {
        if (signUpEmail.value == "" && signUpPassword.value == "") {
          alert('Please enter email and password.');
          event.preventDefault();
          return false;
        }
        else if (!validateEmail(signUpEmail.value)) {
          alert('Please enter a valid email.');
          event.preventDefault();
          return false;
        }
        // else{
          
        // }
      });
    }// Modal End



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

