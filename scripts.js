const fullName = document.getElementById("fullName");
const fullNamesDisplay = document.querySelectorAll(".fullName");
const Email = document.getElementById("email");
const emailDisplay = document.querySelectorAll(".email");
const Github = document.getElementById("github");
const githubDisplay = document.querySelectorAll(".github");
const form = document.getElementById("Form");
const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const dateSpan = document.querySelectorAll(".date");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const avatar = document.getElementById("userPictur");
const inputFile = document.getElementById("file");
let img = new Image();

inputFile.addEventListener("change", (e) => {
  var selectedFile = e.target.files[0];
  var reader = new FileReader();
  reader.onload = (evt) => {
    avatar.src = evt.target.result;
  };
  reader.readAsDataURL(selectedFile);
});

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
  dateSpan.forEach((e) => {
    const d = new Date();
    console.log(d.getMonth());
    e.innerText =
      months[d.getMonth()] + " " + d.getDate() + " ," + d.getFullYear();
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  step1.classList.add("hidden");
  step2.classList.remove("hidden");
});

function parsDate() {}
