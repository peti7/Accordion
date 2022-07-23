'use strict';

const boxs = document.querySelectorAll(".box");
const pTags = document.querySelectorAll("p");
const icons = document.querySelectorAll(".box header i");


boxs.forEach((box, index)=> {
    box.addEventListener("click", () => {
        if(box.classList.contains("open")){
            box.style.height = "50px";
            box.classList.remove("open");
            icons[index].classList.replace("bx-minus", "bx-plus");
        }else{
            let pHeight = pTags[index].clientHeight;
            let boxHeight = box.clientHeight;
            box.style.height = boxHeight + pHeight + "px";
            box.classList.add("open");
            icons[index].classList.replace("bx-plus", "bx-minus");
        }
    });
});