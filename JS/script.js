document.addEventListener("DOMContentLoaded",onHTMLLoad);
function onHTMLLoad(){
    function modalclose(event){
        modal[x].style.display="none";
    }
    function modalopen(event){
        modal[x].style.display="block";
    }
    var x;
    var modal=document.getElementsByClassName("modal");
    var span=document.getElementsByClassName("close");
    var btn=document.getElementById("vitamind");
    var btnfruits=document.getElementById("fruits");
    var btnsleep=document.getElementById("sleep");
    var btnmistakes=document.getElementById("mistakes");
  
    btn.onclick=function(){
        x=0;
    };
    btnfruits.onclick=function(){    
        x=1;
    };
    btnsleep.onclick=function(){
        x=2;
    };
    btnmistakes.onclick=function(){    
        x=3;
    };
    btn.addEventListener("click",modalopen);
    span[0].addEventListener("click",modalclose);
    modal[0].addEventListener("click",modalclose);

    btnfruits.addEventListener("click",modalopen);
    span[1].addEventListener("click",modalclose);
    modal[1].addEventListener("click",modalclose);
    
    btnsleep.addEventListener("click",modalopen);
    span[2].addEventListener("click",modalclose);
    modal[2].addEventListener("click",modalclose);

    btnmistakes.addEventListener("click",modalopen);
    span[3].addEventListener("click",modalclose);
    modal[3].addEventListener("click",modalclose);
    
}