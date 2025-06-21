document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  const messageDiv = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting/reloading

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      messageDiv.style.color = "red";
      messageDiv.textContent = "Please fill out all fields before submitting.";
    } else {
      messageDiv.style.color = "green";
      messageDiv.textContent = "Thanks for your feedback!";
      form.reset();
    }
  });
});
