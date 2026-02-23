let menu=document.getElementById("menu");
let visible=document.getElementById("visible");

function show(){

       if (visible.style.display === "block") {
        visible.style.display = "none";
       } else {
        visible.style.display = "block";
       }

}


menu.addEventListener("click", show);