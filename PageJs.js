const droplogo = document.getElementById("droplogo");
const dropMenu = document.getElementById("dropMenu");

droplogo.addEventListener("click", () => {
    dropMenu.classList.toggle("dn");
})
dropMenu.classList.add("dn");
