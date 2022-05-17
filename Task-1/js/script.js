let circle = document.querySelector(".circle");
let windowBox = document.querySelector(".window-box");
let leftPosition = 0;
let topPosition = 0;

window.addEventListener("keydown", function(event){
    if(event.keyCode==37){
        leftPosition-=10;
        circle.style.left = leftPosition + 'px'; 

        if(leftPosition<0){
            leftPosition = 0;
            circle.style.left = leftPosition + 'px';
        }
    }

    else if(event.keyCode==38){
        topPosition-=10;
        circle.style.top = topPosition + 'px';

        if(topPosition<0){
            topPosition = 0;
            circle.style.top = topPosition + 'px';
        }
        
    }

    else if(event.keyCode==39){
        leftPosition+=10;
        circle.style.left = leftPosition + 'px';

        if(leftPosition>windowBox.offsetWidth-circle.offsetWidth){
            leftPosition = windowBox.offsetWidth-circle.offsetWidth;
            circle.style.left = leftPosition + 'px';
        }
    }

    else if(event.keyCode==40){
        topPosition+=10;
        circle.style.top = topPosition + 'px';

        if(topPosition>windowBox.offsetHeight-circle.offsetHeight){
            topPosition = windowBox.offsetHeight-circle.offsetHeight;
            circle.style.top = topPosition + 'px';
        }
    }

    if((dot.offsetTop>circle.offsetTop) && (dot.offsetTop+dot.offsetHeight)<(circle.offsetTop+circle.offsetHeight)&&
    (dot.offsetLeft>circle.offsetLeft) && (dot.offsetLeft+dot.offsetWidth)<(circle.offsetLeft+circle.offsetWidth)){

    }
})

for(let i=0;i<30;i++){
    let crt = document.createElement(div);
    crt.className = "new-dot";
    windowBox.appendChild(crt);

}