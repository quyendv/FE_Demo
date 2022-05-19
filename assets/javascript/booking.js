// booking parameters
const containerBooking = document.querySelector("#booking .container");
const seats = document.querySelectorAll("#booking .row-seat .seat:not(.occupied)");
const countSelectedSeat = document.querySelector("#booking .count");
const totalPrice = document.querySelector("#booking .total");
// const ticketTypes = document.querySelector("#booking #ticket-types");
const regularTicketPrice = 2;
const premiumTicketPrice = 5;

// let ticketPrice = +ticketTypes.value;

// booking function
function updateSelectedCount() {
  const regularSelectedSeats = document.querySelectorAll(".row-seat .seat.selected:not(.premium)");
  const premiumSelectedSeats = document.querySelectorAll(".row-seat .seat.selected.premium");

  countSelectedSeat.innerHTML = regularSelectedSeats.length + premiumSelectedSeats.length;
  totalPrice.innerHTML = +regularSelectedSeats.length * regularTicketPrice + +premiumSelectedSeats.length * premiumTicketPrice;
}

// seats.addEventListener("change", (e) => {
//   console.log(e.target.classList);
// });

containerBooking.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");
  }

  updateSelectedCount();
});
