const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('redirect-button').disabled = true;

// Check if the two columns are filled
function checkColumnsFilled() {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');

    if (column1.value && column2.value) {
    // Enable the redirect button
    document.getElementById('redirect-button').disabled = false;
    } else {
    // Disable the redirect button
    document.getElementById('redirect-button').disabled = true;
    }
}

// Add event listeners to the two columns
document.getElementById('column1').addEventListener('input', checkColumnsFilled);
document.getElementById('column2').addEventListener('input', checkColumnsFilled);

// Add a click event listener to the redirect button
document.getElementById('redirect-button').addEventListener('click', function() {
  // Redirect to the other page
    window.location.href = '/Wallet/index.html';
});


// document.getElementById('myButton').addEventListener('click', function() {
//     // Get the values from the text fields
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Check if both text fields are filled
//     if (username && password) {
//       // Redirect to the desired link when the button is clicked
//       window.location.href = './Loader/index.html';
//     } else {
//       // Display an alert or perform other actions if the fields are not filled
//       alert('Please fill in both fields before clicking the button.');
//     }
//   });

//   // Enable the button only when both text fields are filled
//   document.getElementById('username').addEventListener('input', toggleButtonState);
//   document.getElementById('password').addEventListener('input', toggleButtonState);

//   function toggleButtonState() {
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var button = document.getElementById('myButton');
    
//     // Enable the button only if both text fields are filled
//     button.disabled = !(username && password);
//   }