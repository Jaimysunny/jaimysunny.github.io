//Load Foundations library
$(document).foundation()

//Alert message in Home Screen

$(document).one("ready", function() {
  alert("You are in the latest version!");
});


// Get the heading element using ID
const headingElement = document.getElementById("HeadingText");

// Add a click event to the heading
headingElement.addEventListener("click", function () {
    // Change the text when clicked
    headingElement.textContent = "You have few unread messages!";
});

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("logo");

  // Change logo on mouseover
  logo.addEventListener("mouseover", function () {
    logo.src = "images/Jobsess-logo-hover.png";
  });

  logo.addEventListener("mouseout", function () {
    logo.src = "images/Jobsess-Logo.png";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to update job post count
  const updateJobPosted = function () {
    const jobPostedInput = document.getElementById("jobPostedInput");
    const jobPostedCount = parseInt(jobPostedInput.value);
    const jobPostedCountSpan = document.getElementById("jobPostedCount");
    jobPostedCountSpan.textContent = jobPostedCount;

    // Save the job post count in Local Storage
    localStorage.setItem("jobPostedCount", jobPostedCount);
  };

  // Check if jobPostedCount is stored in Local Storage, and set the default value to 20 if not found
  const jobPostedInput = document.getElementById("jobPostedInput");
  const storedCount = localStorage.getItem("jobPostedCount");
  jobPostedInput.value = storedCount ? storedCount : "20";

  // Call the updateJobPosted function to set the default value when the page loads
  updateJobPosted();
});


