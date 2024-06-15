document.querySelector(".send").addEventListener("click", function(event) {
    event.preventDefault();

    let username = document.querySelector(".your-name");
    let email = document.querySelector(".email");
    let message = document.querySelector(".message");

    console.log(username.value);
    console.log(email.value);
    console.log(message.value);

    if (username.value !== "" && email.value !== "" && message.value !== "") {
        alert("Message sent");
        username.value = "";
        email.value = "";
        message.value = "";
    } else {
        alert("Please Fill Out all Details");
    }
});
