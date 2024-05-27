document.addEventListener("DOMContentLoaded", function() {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
        document.getElementById("profileFirstName").textContent = profile.first_name;
        document.getElementById("profileLastName").textContent = profile.last_name;
        document.getElementById("profileEmail").textContent = profile.email;
        document.getElementById("profilePhone").textContent = profile.mobile;
        document.getElementById("profileGender").textContent = profile.gender;
    } else {
        alert("No profile details found. Please log in first.");
        window.location.href = "login.html";
    }
});
