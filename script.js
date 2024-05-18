const OpenNav = document.querySelector(".icon1");
const CloseNav = document.querySelector(".fermer");
const Menu = document.querySelector(".menu");

OpenNav.addEventListener("click", () => {
    Menu.classList.add("monter");
});

CloseNav.addEventListener("click", () => {
    Menu.classList.remove("monter");
});
