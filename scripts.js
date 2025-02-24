const fullName = document.getElementById("fullName");
const fullNamesDisplay = document.querySelectorAll(".fullName");
const Email = document.getElementById("email");
const emailDisplay = document.querySelectorAll(".email");
const Github = document.getElementById("github");
const githubDisplay = document.querySelectorAll(".github");
const form = document.getElementById("Form");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");

fullName.addEventListener("change", function (event) {
  fullNamesDisplay.forEach((e) => {
    e.innerHTML = event.target.value;
  });
});
Email.addEventListener("change", function (event) {
  emailDisplay.forEach((e) => {
    e.innerHTML = event.target.value;
  });
});
Github.addEventListener("change", function (event) {
  githubDisplay.forEach((e) => {
    e.innerHTML = event.target.value;
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
});
