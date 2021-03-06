/* ========================================== toggle style switcher ====================================*/
var styleSwitcherToggle= document.querySelector(".style-switcher-toggler");
// console.log(document.querySelector(".style-switcher").classList.toggle);
styleSwitcherToggle.addEventListener("click",()=> {
  document.querySelector(".style-switcher").classList.toggle("open");
});
//hide style switcher on scroll
window.addEventListener("scroll",() => {
  if(document.querySelector(".style-switcher").classList.contains("open")){
    document.querySelector(".style-switcher").classList.remove("open")
  }
})
/* ========================================== Theme colors ====================================*/
var alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
  alternateStyles.forEach((style) => {
    if(color=== style.getAttribute("title")){
      style.removeAttribute("disabled");
    }
    else{
      style.setAttribute("disabled","true");
    }
  })
}
/* ========================================== theme light and darke mode ====================================*/
var dayNight =document.querySelector(".day-night");
dayNight.addEventListener("click",() => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load",() =>{
  if(document.body.classList.contains("dark")){
    dayNight.querySelector("i").classList.add("fa-sun");
  }
  else{
    dayNight.querySelector("i").classList.add("fa-moon");
  }
})
function focushere(a) {

  lnav=document.querySelectorAll(".aside ul.nav a");
  console.log(lnav[a]);
  len=lnav.length;

  for(i=0;i<len;i++){
    console.log(lnav[i].classList);
    if(lnav[i].classList.length!=0){
      lnav[i].classList= "";
    }
  }
  lnav[a].setAttribute("class","active");;
}