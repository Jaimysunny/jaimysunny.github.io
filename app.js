//Load Foundations library
$(document).foundation()

//Alert message in Home Screen

$(document).ready(
  function(){
    alert("You are in the latest version!")
  }
)

// Get the heading element using ID
const headingElement = document.getElementById("HeadingText");

// Add a click event to the heading
headingElement.addEventListener("click", function () {
    // Change the text when clicked
    headingElement.textContent = "You have few unread messages!";
});



