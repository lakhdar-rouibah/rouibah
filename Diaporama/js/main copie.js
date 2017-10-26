

var nombrePhoto = 10;    //=================== Nombre photo dossier img format 1, 2, 3, 4, 5 etc.......

var larg = window.innerWidth;
var haut = window.innerHeight;

var divDiapo = document.getElementById("divDiapo");
var hDivDiapo = divDiapo.offsetHeight;
var wDivDiapo = divDiapo.offsetWidth;
var middle = (larg/2) - (wDivDiapo/2);
	divDiapo.style.left = middle+"px";

var diapo1 = document.getElementById("diapo1");
var diapo2 = document.getElementById("diapo2");
var posDiapo1  = 0 ;
var posDiapo2 =  -(diapo1.offsetWidth) ;

var search = 1;
diapo1.src = "img/"+search+".jpg";
diapo2.src = "img/"+(search += 1)+".jpg";

console.log(diapo2.src);


function diaporama (){

	
	posDiapo1 += 1 ;
	posDiapo2 += 1 ;
	diapo1.style.right = posDiapo1 +"px";
	diapo2.style.right = posDiapo2 +"px";

	

	if (posDiapo1 >= wDivDiapo){

		search += 1;

		posDiapo1 = -wDivDiapo;
		diapo1.style.right = posDiapo1 +"px";
		diapo1.src = "img/"+search+".jpg";

		
	}

	if (posDiapo2 >= wDivDiapo){

			search += 1;
			posDiapo2 = -(diapo1.offsetWidth) ;
			diapo2.style.right = posDiapo2 +"px";
			diapo2.src = "img/"+search+".jpg";
		
		
	}

	if (search == nombrePhoto){

		search = 1;
	}



}

function interDiapo(){

	setInterval(function(){ diaporama() }, 10);

}

//setInterval(function(){ interDiapo() }, 1000);









