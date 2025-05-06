// Array to store user data
let userList = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create user object
  const user = { name, email, password };

  // Add to array and local storage
  userList.push(user);
  localStorage.setItem("users", JSON.stringify(userList));

  // Simulate AJAX POST request
  fakeAjaxPost(user);

  // Reset form
  this.reset();
  alert("User registered successfully!");
});

// Simulated AJAX POST
function fakeAjaxPost(data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://example.com/api/register", true); // this is dummy
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onload = function () {
    console.log("Server Response:", xhr.responseText);
  };
  xhr.send(JSON.stringify(data));
}
