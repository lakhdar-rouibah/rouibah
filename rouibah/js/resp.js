var larg = (window.innerWidth);
var haut = (window.innerHeight);

var submit_btn_resp = document.getElementById('submit_btn_resp');

var photo = document.getElementById('photo_resp');

var mode = document.getElementById('mode');
var loader = document.getElementById('loader');


var body = document.getElementById('body');
var drop = document.getElementById('drop');
var drop_down = document.getElementById('drop_down');


photo.style.left = (larg/2)-50+"px";



//================================================ loader window ===================================================
 function loading( ){
    
    mode.style.display = "block";
    mode.style.backgroundColor = "rgba(0, 0, 0, 1)";
    loader.style.display = "flex";
    loader.style.top = ((haut/2)-100)-50+"px";
    loader.style.left = (larg/2)-116+"px";

}
loading();


window.onload = function (){
   
    mode.style.display = "none";
    loader.style.display = "none";

}

function action(){ //=====================================================action pour envoyer message


        var nom_in = document.getElementById('nom_resp');
        var tel_in = document.getElementById('tel_resp');
        var email_in = document.getElementById('email_resp');
        var message_in = document.getElementById('message_resp');

        var nom = nom_in.value;
        var tel = tel_in.value;
        var email = email_in.value;
        var message = message_in.value;


        if (window.XMLHttpRequest) {

            xmlhttp = new XMLHttpRequest();
        } 
        else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

       
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                var response = this.responseText;
                console.log(response);

                if (response == "ok"){

                    alert("Votre message a bien était envoyer merci");

                    

                    nom_in.value = "";
                    tel_in.value = "";
                    email_in.value = "";
                    message_in.value = "";
                }else if(response == "non"){

                    alert("Oooops! problème est survenue, votre message n'a pas était envoyer"+this.status);
                }


            }
        };
       

        xmlhttp.open("GET","ajax/ajax.php?demande=contact&nom="+nom+"&tel="+tel+"&email="+email+"&message="+message,true);
        xmlhttp.send();


 }

 //============================================== fonction verifier mail =========================================

 function verif_email_resp (emailCharacter){ // ============================= fonction pour vérifier email ======================

        var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

        if(!regex.test(emailCharacter)){
              alert("email non valide!");

             
              return false;

       }
       else
       {


            return true;
          
       }

}

function verif_resp(){ //==================================== fonction verif pour vérifier formaulaire contact

    var nom = document.getElementById('nom_resp');
    var tel = document.getElementById('tel_resp');
    var email = document.getElementById('email_resp');
    var message = document.getElementById('message_resp');

    if (nom.value == ""){

        alert("Champ nom vide!");
        nom.style.border = "1px solid #F79521";
        return false;
        
 
    }else {
        nom.style.border = "0px solid #F79521";


    } 

    if (tel.value == ""  ){

        alert("Champ Tél vide!");
        tel.style.border = "1px solid #F79521";
        return false;
        

    }

    var tele = tel.value;
    var telLength = tele.length;
    var regex = /^[0-9]+$/;
    if (!regex.test(tele)){

        alert("N:° télephone doit etre des chiffres");
        tel.style.border = "1px solid #F79521";
        return false;
                    
    }

    if (telLength != 10){

        alert("N:° télephone doit contenire 10 chiffres");
        tel.style.border = "1px solid #F79521";
        return false;

    }else {

        telValide = true;
        tel.style.border = "0px solid #F79521";
    }
    

    if (email.value == "" ){

        alert("Champ E-mail vide!");
        email.style.border = "1px solid #F79521";
        return false;
        

    }else {

        emailCharacter = email.value
        
        var emailValide = verif_email_resp(emailCharacter);
    } 

    if (message.value == ""  ){

        alert("Champ Message vide!");
        message.style.border = "1px solid #F79521";
        return false;
        
    }else {

        
        message.style.border = "0px solid #F79521";
    }

    if (nom.value != "" && tel.value != "" && email.value != "" && message.value != "" && emailValide == true && telValide == true){

        action();
    }
    
}


//=================================================== listener submit btn ========================================================

submit_btn_resp.addEventListener('click', function(e){

    e.preventDefault();

    verif_resp();
});




/*=================================================== listener drop ==================================*/

drop.addEventListener('mouseover', function(e){

    e.preventDefault();

drop_down.style.display = "block";
});

drop_down.addEventListener('mouseover', function(e){

    e.preventDefault();

drop_down.style.display = "block";
});

drop_down.addEventListener('mouseout', function(e){

    e.preventDefault();

drop_down.style.display = "none";
});

drop.addEventListener('mouseout', function(e){

    e.preventDefault();

drop_down.style.display = "none";

});





