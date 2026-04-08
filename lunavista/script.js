document.getElementById("bookingForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("message").innerText = "Reservation Successful!";
});