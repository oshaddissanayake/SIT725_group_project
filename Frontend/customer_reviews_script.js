document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            review: "These shoes are amazing! Very comfortable and stylish.",
            email: "john@example.com"
        },
        {
            name: "Jane Smith",
            rating: 4,
            review: "Good shoes, but the sizing runs a bit small.",
            email: "jane@example.com"
        },
        {
            name: "Alice Johnson",
            rating: 3,
            review: "Average quality. Expected more for the price.",
            email: "alice@example.com"
        }
    ];

    const reviewsContainer = document.getElementById("reviews");

    reviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        const reviewerName = document.createElement("h3");
        reviewerName.textContent = review.name;

        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.textContent = "Rating: " + "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

        const reviewText = document.createElement("p");
        reviewText.textContent = review.review;

        const reviewerEmail = document.createElement("div");
        reviewerEmail.classList.add("reviewer");
        reviewerEmail.textContent = "Reviewed by: " + review.email;

        reviewElement.appendChild(reviewerName);
        reviewElement.appendChild(rating);
        reviewElement.appendChild(reviewText);
        reviewElement.appendChild(reviewerEmail);

        reviewsContainer.appendChild(reviewElement);
    });
});
