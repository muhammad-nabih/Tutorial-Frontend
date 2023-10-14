const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close")

const aside = document.querySelector("aside");

toggle.addEventListener("click", hideSideBar);


function hideSideBar(e) {
  e.preventDefault();
  aside.classList.toggle("toggle-sidebar");
}

close.addEventListener("click", closeSideBar);
function closeSideBar(e) { 
  e.preventDefault(); 
  aside.classList.remove("toggle-sidebar");
}