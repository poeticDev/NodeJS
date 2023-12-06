const button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log(this);
  console.log(this === this);
});
