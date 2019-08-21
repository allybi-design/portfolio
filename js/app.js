const icon1 = document.getElementById("iconAnim1");
const icon2 = document.getElementById("iconAnim2");
const icon3 = document.getElementById("iconAnim3");
const icon4 = document.getElementById("iconAnim4");

icon1.addEventListener("mouseover", ()=> {
    icon1.classList.add("bounce")
})
icon1.addEventListener("mouseleave", () => {
  icon1.classList.remove("bounce");
});

icon2.addEventListener("mouseover", () => {
  icon2.classList.add("bounce");
});
icon2.addEventListener("mouseleave", () => {
  icon2.classList.remove("bounce");
});

icon3.addEventListener("mouseover", () => {
  icon3.classList.add("bounce");
});
icon3.addEventListener("mouseleave", () => {
  icon3.classList.remove("bounce");
});

icon4.addEventListener("mouseover", () => {
  icon4.classList.add("bounce");
});
icon4.addEventListener("mouseleave", () => {
  icon4.classList.remove("bounce");
});