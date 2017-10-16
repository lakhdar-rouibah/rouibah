
var larg = (window.innerWidth);
var haut = (window.innerHeight);

var body = document.getElementById('body');
var drop = document.getElementById('drop');
var drop_down = document.getElementById('drop_down');

var contact = document.getElementById('contact');
var modal = document.getElementById('modal');
var modal_sq = document.getElementById('modal_square');
var close = document.getElementById('close');
var submit_btn = document.getElementById('submit_btn');

var message = document.getElementById('message');
var compteur = document.getElementById('compteur');

var modal_alert = document.getElementById('modal_alert');
var ok_btn = document.getElementById('ok_btn');
var area_alert = document.getElementById('area_alert');

var cv_pdf = document.getElementById('cv_pdf');
var mode = document.getElementById('mode');
var modal_cv = document.getElementById('modal_cv');
var close_cv = document.getElementById('close_cv');
var modal_center_cv = document.getElementById('modal_center_cv');

var cer_pdf = document.getElementById('cer_pdf');
var modal_cer = document.getElementById('modal_cer');
var close_cer = document.getElementById('close_cer');

var modal_phone = document.getElementById('modal_phone');
var close_phone = document.getElementById('close_phone');
var phone = document.getElementById('phone');

var certificat = document.getElementById('certificat');
var left = document.getElementById('left');
var right = document.getElementById('right');
var h_cer = document.getElementById('h_cer');

var shared = document.getElementById('shared');
var clode_shared = document.getElementById('clode_shared');
var fa_right = document.getElementById('fa_right');
var fa_left = document.getElementById('fa_left');

var nom_shared = document.getElementById('nom_shared');
var email_shared = document.getElementById('email_shared');


var n_code = document.getElementById('n_code');
var need = document.getElementById('need');
var close_code = document.getElementById('close_code');
var phone_code = document.getElementById('phone_code');
var code_m = document.getElementById('code_m');

var nom_arr = ["Apprenez a coder avec javascript", "Apprenez a creer votre site web avec html5 et css3", "Comprendre le web",
"Concevez votre site web avec php et mysql", 
"Creez des pages web interactives avec javascript", "Decouper et integrer une maquette", "Decouvrez les solutions cms", 
"Gerez votre code avec git et github", "Introduction a jquery", "Realisez des sites modernes et beaux grace a wordpress",
 "Reprenez le controle a l'aide de linux"];

var x=1;
var l=0;
var m=0;
//=================================================== fin de variables =======================================================
certificat.data = "img/"+ x + ".pdf";
h_cer.textContent = nom_arr[l];

visited('index');

/*=================================================== alert ==================================*/

function alert_msg(msg){ //========================================== alert

	modal_alert.style.display = "block";
	area_alert.value = msg;
	
}

//=================================================== visiteur =============================================================

function visited(page){ //=======================================================fonction page visiter

			console.log('fonction appeler : '+page);


			if (window.XMLHttpRequest) {

           				 xmlhttp = new XMLHttpRequest();
       			} 
        		else {
            			// code for IE6, IE5
            		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        		}


        xmlhttp.open("GET","ajax/ajax.php?demande=visiteur&page="+page,true);
        xmlhttp.send();


}

//============================================== conteur message ========================================

function message_count() { //============================================================ conteur message

			
			var s = message.value.length;
			var i = 300 - s;
			compteur.value = i;

			if (i <=0){

				
				alert_msg("Votre message dépasse les 300 caractères!");
				

			}
}

// ============================================ fonction action pour envoyer message contact=========

function action(){ //=====================================================action pour envoyer message


		var nom_in = document.getElementById('nom');
		var tel_in = document.getElementById('tel');
		var email_in = document.getElementById('email');
		var message_in = document.getElementById('message');

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

                	alert_msg("Votre message a bien était envoyer merci");

                	visited("message envoyer");

                	nom_in.value = "";
                	tel_in.value = "";
                	email_in.value = "";
                	message_in.value = "";

                	modal.style.display = "none";
                }else if(response == "non"){

                	alert_msg("Oooops! problème est survenue, votre message n'a pas était envoyer"+this.status);
                }


            }
        };
       

        xmlhttp.open("GET","ajax/ajax.php?demande=contact&nom="+nom+"&tel="+tel+"&email="+email+"&message="+message,true);
        xmlhttp.send();


 }

 //  =============================================== fonction pour vérifier email ===========================================

 function verif_email (emailCharacter){ // ============================= fonction pour vérifier email ======================

		var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

		if(!regex.test(emailCharacter)){
		      alert_msg ("email non valide!");

		     
		      return false;

	   }
	   else
	   {

	   		
	      	email.style.border = "0px solid #F79521";

	      	return true;
	      
	   }

}


//========================================================== fonction pour vérifier téléphone ==================================

function verif_phone (phone){ // ======================== fonction pour vérifier téléphone =====================================

		var regex = /^[0-9]+$/;
		var tel_index = phone.charAt(0);
		var tel_pref = phone.charAt(1);


		if(!regex.test(phone)){
			
		      
		      alert_msg ("N:° tél non valide!");
		      return false;
		   

	   }else if (phone.length > 10 || phone.length < 10){
		      
		      alert_msg ("N:° tél doit contenir 10 chiffres!");
		      return false;
		}else if (tel_index == 0 ){

			if (tel_pref > 5 && tel_pref < 8){
				return true;
			}else {

				alert_msg("N:° tel doit etre un (06 ou 07)");
			}
			
		}

}

//===================================================== fonction verif pour vérifier formaulaire contact ========================

function verif(){ //==================================== fonction verif pour vérifier formaulaire contact

	var nom = document.getElementById('nom');
	var tel = document.getElementById('tel');
	var email = document.getElementById('email');
	var message = document.getElementById('message');

	if (nom.value == ""){

		alert_msg("Champ nom vide!");
		nom.style.border = "1px solid #F79521";
		return false;
		
 
	}else {
		nom.style.border = "0px solid #F79521";


	} 

	if (tel.value == ""  ){

		alert_msg("Champ Tél vide!");
		tel.style.border = "1px solid #F79521";
		return false;
		

	}

	var tele = tel.value;
	var telLength = tele.length;
	var regex = /^[0-9]+$/;
	if (!regex.test(tele)){

		alert_msg("N:° télephone doit etre des chiffres");
		tel.style.border = "1px solid #F79521";
		return false;
					
	}

	if (telLength != 10){

		alert_msg("N:° télephone doit contenire 10 chiffres");
		tel.style.border = "1px solid #F79521";
		return false;

	}else {

		telValide = true;
		tel.style.border = "0px solid #F79521";
	}
	

	if (email.value == "" ){

		alert_msg("Champ E-mail vide!");
		email.style.border = "1px solid #F79521";
		return false;
		

	}else {

		emailCharacter = email.value
		
		var emailValide = verif_email(emailCharacter);
	} 

	if (message.value == ""  ){

		alert_msg("Champ Message vide!");
		message.style.border = "1px solid #F79521";
		return false;
		
	}else {

		
		message.style.border = "0px solid #F79521";
	}

	if (nom.value != "" && tel.value != "" && email.value != "" && message.value != "" && emailValide == true && telValide == true){

		action();
	}
	
}

// ========================================================= fonction plus pour les certificats ===========

function plus(){ // ============================= pour passer au certificat suivante

	
		certificat.data = "img/"+ (x+=1)+ ".pdf";
		h_cer.textContent = nom_arr[l+=1];
	
}

function moins(){ // ============================= pour passer au certificat précédente

	
		certificat.data = "img/"+ (x-=1)+ ".pdf";
		h_cer.textContent = nom_arr[l-=1];

		
	
}

//========================================================= shared pour ouvrir et fermer ======================

function open_shared (lm, val){ //========================= shared pour ouvrir 
	
	number = Math.sqrt(lm/3)*5-27;

	shared.style.left = number+"%";
	
	
	if (number > -3){

		clearInterval(val);

		visited("open shared");
		fa_left.style.display = "block";
		fa_right.style.display = "none";
		m=0;
	}
}

function close_shared (lm, val_close){ //================= shared pour fermer
	
	number = -(Math.sqrt(lm/3)*5);

	shared.style.left = number+"%";
	
	if (number < -27){

		clearInterval(val_close);
		fa_left.style.display = "none";
		fa_right.style.display = "block";
		m=0;
		
	}
}

//============================================================ fonction open closed interval =======================

function open(){ //=========================================== interval open 

 var interval = setInterval(function(){ open_shared(m+=1, interval) },1);

}

function closed(){ //========================================= interval closed 

 var interval_close = setInterval(function(){ close_shared(m+=1, interval_close) }, 1);

}

//============================================================ fonction shared pour envoyer profil =====================


function shared_func(){ //==================================== fonction shared pour envoyer profil apres verification


	visited("shared");

	emailValide = verif_email (email_shared.value);
	

	if (nom_shared.value == "" ){

				alert_msg ("Champ nom vide!");

  	}

  	if (emailValide == true && nom_shared.value != "" ){

  				var nom = nom_shared.value;
				var email = email_shared.value;

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

	                	if (response == "ok"){

		                	alert_msg("Votre message a bien était envoyer merci");

		                	visited("shared ok");

		                	nom_shared.value = "";
							email_shared.value = "";
							closed ();

	                	}else if(response == "non"){

	                			alert_msg("Oooops! problème est survenue, votre message n'a pas était envoyer"+this.status);
	               		 }


           			 }
       			 };
       

        xmlhttp.open("GET","ajax/ajax.php?demande=shared&nom_shared="+nom+"&email_shared="+email,true);
        xmlhttp.send();

  			}

}

//========================================== fonction phone number pour generer le code =======================================

function phone_number(){//=============================================================================================== phone

	visited("taper n:° tel");
	var tel = phone.value;
	emailValide = verif_phone (tel);


  	if (emailValide == true){

				
				

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

		                	mode.style.display = "none";
							modal_phone.style.display = "none";
							phone.value= "";
							visited("vers le code");

		                	need.style.display = "flex";
							mode.style.display = "block";
		                	

	                	}else if(response == "non"){

	                			alert_msg("Oooops! problème est survenue, le systeme n'a pas pu générer un code"+this.status);
	               		 }


           			 }
       			 };
       

        xmlhttp.open("GET","ajax/ajax.php?demande=code&tel_c="+tel,true);
        xmlhttp.send();

  			}

}

//=================================================== fonction pour vérifier le code ========================================

function code_verif() {

			var p_code = phone_code.value;
			var m_code = code_m.value;

			var valide = verif_phone (p_code);

			if (m_code.length == 5 && valide == true){

				//================================================================================================= code


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


	                	if (response == "ok"){

		                	visited("code bon");

							modal_phone.style.display = "none";
		                	need.style.display = "none";
							modal_cer.style.display = "flex";
							mode.style.display = "block";
		                	
		                	

	                	}else if(response == "non"){

	                			alert_msg("Votre N:° de Tél ou code sont incorecte");
	                			visited("erreur code");
	               		 }


           			 }
       			 };
       

        xmlhttp.open("GET","ajax/ajax.php?demande=verif_code&p_code="+p_code+"&m_code="+m_code,true);
        xmlhttp.send();

  			}


}
//======================================================== fin fonctions ======================================================

//======================================================== debut listener =====================================================

 function chargeur(){
    
   
    mode.style.display = "block";
    mode.style.backgroundColor = "rgba(0, 0, 0, .8)";
    loader.style.display = "none";

    
    
} 

cv_data.onload = function(){chargeur();}
certificat.onload = function(){chargeur();}
/*=================================================== modal contact ==================================*/
contact.addEventListener('click', function(e){

	e.preventDefault();

modal.style.display = "block";
visited("contact");
	
});


close.addEventListener('click', function(e){

	e.preventDefault();

modal.style.display = "none";
});
//=================================================== fin listener modal ( contact ) ==============================================

/*=================================================== modal CV PDF ==================================*/
cv_pdf.addEventListener('click', function(e){

	e.preventDefault();


modal_cv.style.display = "flex";
mode.style.display = "block";

visited("cv_pdf");
	
});


close_cv.addEventListener('click', function(e){

	e.preventDefault();

mode.style.display = "none";
modal_cv.style.display = "none";
});

//=================================================== fin listener CV PDF =======================================================
/*=================================================== modal certificat ==================================*/
cer_pdf.addEventListener('click', function(e){

	e.preventDefault();


modal_phone.style.display = "flex";
mode.style.display = "block";
visited("phone");
	
});


close_phone.addEventListener('click', function(e){

	e.preventDefault();

mode.style.display = "none";
modal_phone.style.display = "none";
});

close_cer.addEventListener('click', function(e){

	e.preventDefault();

mode.style.display = "none";
modal_cer.style.display = "none";
});

//=================================================== fin listener modal certificat =============================================

//============================================================= listener message compteur ================================

message.addEventListener('keyup', message_count);

//======================================================= fin listener compteur ===========================================


//=================================================== listener alert ==========================================================
ok_btn.addEventListener('click', function(e){

	e.preventDefault();

modal_alert.style.display = "none";

});
//=================================================== fin listener alert =======================================================

//=================================================== listener submit contact ==================================================
submit_btn.addEventListener('click', function(e){

	e.preventDefault();

	verif();
});
//=================================================== fin listener submit (contact) ===========================================


//======================================== listener certificat  (left & right ) ====================================

left.addEventListener('click', function(e){

	e.preventDefault();
	
	if (x>=2 && x<=11){
		moins();

	}else {

		x=12;

		l=11;
		moins();
	}


});

right.addEventListener('click', function(e){

	e.preventDefault();

	if (x>=1 && x<=10){
		plus();

	}else {

		x=0;
		l=-1;
		
		plus();
	}

});

//=================================================== fin listener certificat ( left &right ) ====================================

//======================================================= listenr shared ( fa_left & fa_right ) ==================================

fa_right.addEventListener('click', function(e){

	e.preventDefault();
	
	open();

	
});

fa_left.addEventListener('click', function(e){

	e.preventDefault();
	
	closed();
});
//======================================================= fin listenr shared ( fa_left & fa_right ) ==============================

//========================================== listener need un code  ======================================================

n_code.addEventListener('click', function(e){

	e.preventDefault();
visited("il a un code");

need.style.display = "flex";
mode.style.display = "block";

	
});


close_code.addEventListener('click', function(e){

	e.preventDefault();

mode.style.display = "none";
need.style.display = "none";
modal_phone.style.display = "none";
}); 

//========================================== fin listener need un code  ======================================================
//========================================== listener verif  code  ======================================================
	
code_m.addEventListener('keyup', code_verif);

//========================================== fin listener vérif code  ======================================================
//==================================================== fin ====================================================================












