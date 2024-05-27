import { postRequest } from "./utils/apiFunctions.js";

document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting via the browser

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const shoe = document.getElementById("shoe").value;
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;

    // Basic validation check
    if (name && email && shoe && rating && review) {
      // Validate email format
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Validate rating
      const ratingPattern = /^[1-5]$/;
      if (!ratingPattern.test(rating)) {
        alert("Rating must be a number between 1 and 5");
        return;
      }

      console.log("Review details:", name, email, shoe, rating, review);
      postRequest("reviews/submit", {
        name: name,
        email: email,
        shoe_model: shoe,
        rating: rating,
        review: review,
      })
        .then((res) => {
          // Display a confirmation message
          document.getElementById("reviewForm").reset();
          document.getElementById("confirmationMessage").classList.remove("hidden");
          console.log(res);
        })
        .catch((err) => {
          alert("Failed to submit review");
          console.log(err);
        });
    } else {
      alert("Please fill out all fields");
    }
  });
