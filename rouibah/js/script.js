
var larg = (window.innerWidth);
var haut = (window.innerHeight);

var ecran = "";
var nav = ""

var mode = document.getElementById('mode');
var loader = document.getElementById('loader');
var cv_data = document.getElementById('cv_data');
var certificat = document.getElementById('certificat');

var photo = document.getElementById('photo_resp');
photo.style.left = (larg/2)-50+"px";




//================================================ loader window ===================================================
 function loading( ){
    
    mode.style.display = "block";
    mode.style.backgroundColor = "rgba(23, 172, 178, 1)";
    loader.style.display = "flex";
    loader.style.top = ((haut/2)-100)-50+"px";
    loader.style.left = (larg/2)-116+"px";

}
loading();


window.onload = function (){
   
    mode.style.display = "none";
    loader.style.display = "none";

}


//================================================ loader data===================================================
 
function loading_data( data_value){
    
    mode.style.display = "block";
    mode.style.backgroundColor = "rgba(23, 172, 178, 1)";
    loader.style.display = "flex";
    loader.style.top = ((haut/2)-100)+40+"px";
    loader.style.left = (larg/2)-116+"px";
    cv_data.data = data_value;
    certificat.data = data_value;

}



// ============================================ fonction action pour envoyer message contact=========







//===================================================== fonction verif pour vérifier formaulaire contact ========================


//================================================ navigateur ===================================================

function navigateur() { 
         if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
            nav = 'Opera';
        }
        else if(navigator.userAgent.indexOf("Chrome") != -1 ){
            nav = 'Chrome';
        }
        else if(navigator.userAgent.indexOf("Safari") != -1){
            nav = 'Safari';
        }
        else if(navigator.userAgent.indexOf("Firefox") != -1 )  {
            nav = 'Firefox';
        }
        else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )){ //IF IE > 10{
            nav = 'IE'; 
        }  
        else {
            nav = 'unknown';
        }
}

navigateur();

if (nav == "Safari"){

    //console.log("votre navigateur "+nav+ " n'est pas compatible");
}


if (navigator.userAgent.match(/(android|iphone|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|iPad|playbook)/gi)) {
    ecran ="mobile";
} 

if(larg < 1024 || haut < 600 ){

    if (ecran !="mobile"){

        alert("Vaut mieux agrandir la taille de la fenetre pour bien visualiser la page");

    }
}

//================================================ loader ===================================================

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
//=================================================== fin listener drop ==========================================================


































