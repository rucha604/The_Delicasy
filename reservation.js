document.querySelector(".booked").addEventListener("click", function(event) {
    event.preventDefault();
    
    let date = document.getElementById("res-date").value;
    let time = document.getElementById("res-time").value;
    let name = document.getElementById("res-name").value;
    
    if (date !== "" && time !== "" && name !== "") {
        alert("Table Booked Successfully");
        
        document.getElementById("reservation-form").reset();
    } else {
        alert("Please fill out all fields");
    }
});
