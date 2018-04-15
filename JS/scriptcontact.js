document.addEventListener("DOMContentLoaded",onHTMLLoad);
function onHTMLLoad(){
    function ButtonClick(event){
        event.preventDefault();
        function validemail(){
            var emailaddress=email[0].value;
            var posat=emailaddress.indexOf("@");
            var posdot=emailaddress.lastIndexOf(".");
            if (posat<1 || posat+2>posdot || posdot+2>=emailaddress.length ){
                return false;
            }
        }
        var name=document.getElementsByName("Name");
        console.log(name[0].value);
        var email=document.getElementsByName("Email");
        console.log(email[0].value);
        var message=document.getElementsByName("Content");
        console.log(message[0].value);
        var valid=true;
        if (name[0].value===''){
            name[0].style.border="solid 1px red";
            valid=false;
        }else {
            name[0].style.border='';
        }
        if (email[0].value===''|| validemail()===false){
            email[0].style.border="solid 1px red";
            valid=false;
        }else{
            email[0].style.border='';
        }
        if (message[0].value===''){
            message[0].style.border="solid 1px red";
            valid=false;
        }else {
            message[0].style.border='';
        }

        if (valid){
            var validMessage=document.getElementById("InfoBanner");
            var bannermessage=document.createElement('p');
            bannermessage.innerHTML="<p> Valid </p>";
            bannermessage.style.color="green";
            validMessage.appendChild(bannermessage);
            setTimeout('', 10000);
            window.location.reload(true);
        }
      
    }

    var btn_submit=document.getElementById("submit-btn");
    btn_submit.addEventListener("click",ButtonClick);
}