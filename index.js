// navbar

const toggle = document.querySelector(".toggle");
const navmenu = document.querySelector(".sidebar")

toggle.addEventListener("click",()=>{
    console.log("clicked")
    navmenu.classList.toggle("change")
})