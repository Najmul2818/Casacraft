document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (email === "" || password === "") {
alert("Please fill all fields!");
return;
}

alert("Login successful!");

// Redirect to home page
window.location.href = "index.html";
});
