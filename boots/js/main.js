



var larg = window.innerWidth;
var haut = window.innerHeight;

var plan = document.getElementById('plan');

var links1 = document.getElementById('links1');
var links2 = document.getElementById('links2');
var links3 = document.getElementById('links3');
var links4 = document.getElementById('links4');

var titre = document.getElementById('titre');
var informations = document.getElementById('informations');

var wPlan = plan.offsetWidth;
var hPlan = plan.offsetHeight;

var hMiddle = (haut/2)-(hPlan/2);
var wMiddle = (larg/2)-(wPlan/2);

i=0;

function links_rotate(){

	i+=5;

	links1.style.transform = "rotate("+i+"deg)";
	links1.transformOrigin = ""+50+"px "+50+"px";

	links2.style.transform = "rotate("+i+"deg)";
	links2.transformOrigin = ""+50+"px "+50+"px";

	links3.style.transform = "rotate("+i+"deg)";
	links3.transformOrigin = ""+50+"px "+50+"px";

	links4.style.transform = "rotate("+i+"deg)";
	links4.transformOrigin = ""+50+"px "+50+"px";

	if (i == 1845){

		clearInterval(id);
	}
}




	id = setInterval(function(){ links_rotate(); }, 1);

//========================================================= wind =======================================



var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link4 = document.getElementById('link4');

var wind1 = document.getElementById('wind1');
	wind1.style.top = -(wind1.offsetHeight)+"px";

var wind2 = document.getElementById('wind2');
	wind2.style.top = -(wind2.offsetHeight)+"px";

var wind3 = document.getElementById('wind3');
	wind3.style.top = -(wind3.offsetHeight)+"px";

var wind4 = document.getElementById('wind4');
	wind4.style.top = -(wind4.offsetHeight)+"px";
	


var s = -(wind1.offsetHeight);
var l = 100;

var loadwind = function () {

    
    this.open= function (win, id) {

	    s += 5;
		win.style.top = s+"px";

		if (s >= 0){

			clearInterval(id);
			
		}
        
    }

	this.close= function (win, id) {

    	s -= 5;
		win.style.top = s+"px";

		if (s <= -(win.offsetHeight)){

			clearInterval(id);
			
		}
        
    }}



var wind = function () {

    
    this.open= function (win,win1,win2, id) {

	    s += 5;
	    l-=1;
		win.style.top = s+"px";
		win1.style.opacity = l/10;
		win2.style.opacity = l/10;

		console.log(l/10);

		if (l==0){

			l=0;
			win1.style.display = "none";
			win2.style.display = "none";
		}

		if (s >= 0){

			clearInterval(id);
			
		}
        
    }

	this.close= function (win,win1,win2, id) {

    	s -= 5;
    	l +=1;
		win.style.top = s+"px";
		win1.style.opacity = l/10;
		win2.style.opacity = l/10;

		console.log(l/10);

		if (l==10){

			l=10;
			win1.style.display = "block";
			win2.style.display = "block";
		}

		if (s <= -(win.offsetHeight)){

			clearInterval(id);
			
		}
        
    }
}

//============================================= link3
link3.addEventListener("click", function(){

	if (wind3.offsetTop == -(wind3.offsetHeight)){

		id4 = setInterval(function(){ 

			windo1 = new wind();
			windo1.open(wind3,links2,links1, id4)

		 }, 1);
	}else {

		
		id5 = setInterval(function(){ 

			windo1 = new wind();
			windo1.close(wind3,links2,links1, id5)

		}, 1);
	}

});







//============================================= link2
link2.addEventListener("click", function(){

	if (wind2.offsetTop == -(wind2.offsetHeight)){

		id9 = setInterval(function(){ 

			windo1 = new wind();
			windo1.open(wind2,links1, links3, id9)

		 }, 1);
	}else {

		
		idA = setInterval(function(){ 

			windo1 = new wind();
			windo1.close(wind2,links1, links3, idA)

		}, 1);
	}

});







//============================================= link1
link1.addEventListener("click", function(){

	if (wind1.offsetTop == -(wind1.offsetHeight)){

		idE = setInterval(function(){ 

			windo1 = new wind();
			windo1.open(wind1,links2, links3, idE)

		 }, 1);
	}else {

		
		idF = setInterval(function(){ 

			windo1 = new wind();
			windo1.close(wind1,links2, links3, idF)

		}, 1);
	}

});
















