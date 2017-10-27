
//================================================ diaporama =================================================

var nombrePhoto = 10;    //=================== Nombre photo dossier img format 1, 2, 3, 4, 5 etc.......
var x = 2;		//==================== vitesse de 1 a 10 =====================================

var vitesse = 7;

var larg = window.innerWidth;
var haut = window.innerHeight;


var divBorder = document.getElementById("divBorder");
var hDivBorder = divBorder.offsetHeight;
var wDivBorder = divBorder.offsetWidth;
var middle = (larg/2)-(wDivBorder/2);
	divBorder.style.left = 10+"%";
	
	

console.log("largeur div : "+wDivBorder+" larg ecran : "+larg);
console.log("le middle : "+middle);

var divDiapo = document.getElementById("divDiapo");
	divDiapo.style.width = "100%";
	
var hDivDiapo = divDiapo.offsetHeight;
var wDivDiapo = divDiapo.offsetWidth;
	divDiapo.style.height = (wDivDiapo/ 3.02)+"px";
//var middle = (larg/2) - (wDivDiapo/2);
	//divDiapo.style.left = middle+"px";
console.log(wDivDiapo);
var diapo1 = document.getElementById("diapo1");
var diapo2 = document.getElementById("diapo2");
var posDiapo1  = 0 ;
var posDiapo2 =  -(diapo1.offsetWidth) ;

var search = 3;

function diaporama (id){


	posDiapo1 += vitesse ;
	posDiapo2 += vitesse ;
	diapo1.style.right = posDiapo1 +"px";
	diapo2.style.right = posDiapo2 +"px";

	

	if (posDiapo1 >= wDivDiapo){

		search += 1;

		posDiapo1 = -wDivDiapo;
		diapo1.style.right = posDiapo1 +"px";
		diapo1.src = "img/"+search+".jpg";
		clearInterval(id);
		
	}

	if (posDiapo2 >= wDivDiapo){

			search += 1;
			posDiapo2 = -(diapo1.offsetWidth) ;
			diapo2.style.right = posDiapo2 +"px";
			diapo2.src = "img/"+search +".jpg";
		clearInterval(id);
		
		
	}

	if (search == nombrePhoto){

		search = 0;
	}



}

function interDiapo(){

	 var id = setInterval(function(){ diaporama(id) }, 1);

}

setInterval(function(){ interDiapo() }, 5000);

//================================================================ fin diaporama ====================================

//================================================================ drop down ========================================


var bars = document.getElementById ('bars');
var dropDown = document.getElementById('dropDown');


bars.addEventListener("click", function(){

    	dropDown.style.display = "flex";

    
});

bars.addEventListener("mouseout", function(){

    	dropDown.style.display = "none";

    
});

dropDown.addEventListener("mouseover", function(){

    	dropDown.style.display = "flex";

    
});

dropDown.addEventListener("mouseout", function(){

    	dropDown.style.display = "none";

    
});


//============================================================ Fin drop down ======================================




