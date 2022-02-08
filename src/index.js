console.log("Hello class");


document.querySelector("#players").insertAdjacentHTML("beforeend", "<li>Bruno Fernandes</li>");
document.querySelector("#players").insertAdjacentHTML("beforeend", "<li>Pepe</li>");

const element = document.querySelector("#romain");

// element.addEventListener("click", (event) => {
//   // Do something (callback)
//   console.log("you just clicked!");
//   console.log(event.currentTarget);
//   // event.currentTarget.style.display = "none";
// });

document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    debugger;
    console.log("clicked on img!");
    event.currentTarget.classList.toggle("img-circle");
  });
});
