document.addEventListener("DOMContentLoaded",onContentLoaded);
function onContentLoaded(){
    var div=document.getElementsByClassName("nutritionContent");

    function OnClick(event){
        event.preventDefault();
       b[0].style.display="block";
       d[0].style.display="none";
       c[0].style.display="none";
       m[0].style.display="none";
       s[0].style.display="none";
       listBasic.style.fontWeight="bold";
       listDiet.style.fontWeight="initial"
       listCooking.style.fontWeight="initial"
       listMenus.style.fontWeight="initial"
       listSupliments.style.fontWeight="initial"
       
    }
    function OnClick2(event){
        event.preventDefault();
        b[0].style.display="none";
        d[0].style.display="block";
        c[0].style.display="none";
        m[0].style.display="none";
        s[0].style.display="none";
        listBasic.style.fontWeight="initial"
        listDiet.style.fontWeight="bold"
        listCooking.style.fontWeight="initial"
        listMenus.style.fontWeight="initial"
        listSupliments.style.fontWeight="initial"
    }
    function OnClick3(event){
        event.preventDefault();
        b[0].style.display="none";
        d[0].style.display="none";
        c[0].style.display="block";
        m[0].style.display="none";
        s[0].style.display="none";  
        listBasic.style.fontWeight="initial"
        listDiet.style.fontWeight="initial"
        listCooking.style.fontWeight="bold"
        listMenus.style.fontWeight="initial"
        listSupliments.style.fontWeight="initial"        
    }
    function OnClick4(event){
        event.preventDefault();
        b[0].style.display="none";
        d[0].style.display="none";
        c[0].style.display="none";
        m[0].style.display="block";
        s[0].style.display="none";
        listBasic.style.fontWeight="initial"
        listDiet.style.fontWeight="initial"
        listCooking.style.fontWeight="initial"
        listMenus.style.fontWeight="bold"
        listSupliments.style.fontWeight="initial"
    }
    function OnClick5(event){
        event.preventDefault();
        b[0].style.display="none";
        d[0].style.display="none";
        c[0].style.display="none";
        m[0].style.display="none";
        s[0].style.display="block";
        listBasic.style.fontWeight="initial"
        listDiet.style.fontWeight="initial"
        listCooking.style.fontWeight="initial"
        listMenus.style.fontWeight="initial"
        listSupliments.style.fontWeight="bold"
    }    
    var listBasic=document.getElementById("basic");
    var listDiet=document.getElementById("diet");
    var listCooking=document.getElementById("cooking");
    var listMenus=document.getElementById("menus");
    var listSupliments=document.getElementById("supliments");
    var b=document.getElementsByClassName("BasicElement");
    var d=document.getElementsByClassName("DietElement");
    var c=document.getElementsByClassName("CookingElement");
    var m=document.getElementsByClassName("MenusElement");
    var s=document.getElementsByClassName("SuplimentsElement");
    var btn_basic=document.getElementsByName("btnBasics");
    var btn_diet=document.getElementsByName("btnDiet");
    var btn_cooking=document.getElementsByName("btnCooking");
    var btn_menu=document.getElementsByName("btnMenu");
    var btn_supl=document.getElementsByName("btnSupplement");
    listBasic.addEventListener("click",OnClick);
    btn_basic[0].addEventListener("click",OnClick);
    listDiet.addEventListener("click",OnClick2);
    btn_diet[0].addEventListener("click",OnClick2);
    btn_diet[1].addEventListener("click",OnClick2);
    listCooking.addEventListener("click",OnClick3);
    btn_cooking[0].addEventListener("click",OnClick3);
    btn_cooking[1].addEventListener("click",OnClick3);
    listMenus.addEventListener("click",OnClick4);
    btn_menu[0].addEventListener("click",OnClick4);
    btn_menu[1].addEventListener("click",OnClick4);
    listSupliments.addEventListener("click",OnClick5);
    btn_supl[0].addEventListener("click",OnClick5);
       b[0].style.display="block";
       d[0].style.display="none";
       c[0].style.display="none";
       m[0].style.display="none";
       s[0].style.display="none";
       console.log(listBasic);
}