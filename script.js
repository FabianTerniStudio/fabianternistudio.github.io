const rayas = document.getElementById("rayas")
const menu = document.getElementById("menu")
rayas.addEventListener("click", () => {
    menu.classList.toggle("visible")
    menu.classList.toggle("unvisible")
})
