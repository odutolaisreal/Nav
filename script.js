var togglebtn = document.querySelector(".menu");
var togglebtnicon = togglebtn.querySelector("i");
var dropdown_Menu = document.querySelector(".dropdown_Menu");
togglebtn.onclick = function(){
    dropdown_Menu.classList.toggle("open");
    var is_open = dropdown_Menu.classList.contains("open");
    togglebtnicon.classList.toggle("fa-bars", !is_open);
    togglebtnicon.classList.toggle("fa-xmark", is_open);

}