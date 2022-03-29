/*Button css*/
function toggleMenu() {
    console.log("It worked!")
    document.querySelector("#primarynav").classList.toggle("open");
    document.querySelector("#hamburgerbtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerbtn");
x.onclick = toggleMenu;
