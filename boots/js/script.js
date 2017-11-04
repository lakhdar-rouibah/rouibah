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

