const nav = document.getElementById("nav")
const menu = document.getElementById("menu")
nav.addEventListener("click", () => {
    menu.classList.toggle("visible")
    menu.classList.toggle("unvisible")
})