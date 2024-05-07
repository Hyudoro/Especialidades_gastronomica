 const OpenNav = document.querySelector(".icon1")
 const CloseNav = document.querySelector(".fermer")
 const Menu = document.querySelector(".menu")


 const PositionMenu = Menu.getBoundingClientRect().left;



 OpenNav.addEventListener("click",()=>{
    if(PositionMenu<0){
        Menu.classList.add("monter")
    }
 })

 CloseNav.addEventListener("click",()=>{
    if(PositionMenu<0){
        Menu.classList.remove("monter")
    }
 })