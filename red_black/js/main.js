

var i = 1;

var vitesse = 1;

var divLinks = document.getElementById('divLinks');

var closeAbout = document.getElementById('closeAbout');
var closeSkills = document.getElementById('closeSkills');
var closeWork = document.getElementById('closeWork');
var closeEduc = document.getElementById('closeEduc');
var closePort = document.getElementById('closePort');
var closeObject = document.getElementById('closeObject');
var closeService = document.getElementById('closeService');
var closeHobbies = document.getElementById('closeHobbies');
var closeContact = document.getElementById('closeContact');

var divAbout = document.getElementById('divAbout');
var divSkills = document.getElementById('divSkills');
var divWork = document.getElementById('divWork');
var divEduc = document.getElementById('divEduc');
var divPort = document.getElementById('divPort');
var divObject = document.getElementById('divObject');
var divService = document.getElementById('divService');
var divHobbies = document.getElementById('divHobbies');
var divContact = document.getElementById('divContact');


var about = document.getElementById('about');
var skills = document.getElementById('skills');
var work = document.getElementById('work');
var educ = document.getElementById('educ');
var port = document.getElementById('port');
var object = document.getElementById('object');
var service = document.getElementById('service');
var hobbies = document.getElementById('hobbies');
var contact = document.getElementById('contact');



function closed(id, wind, divOpen) {

	i -= 0.01;

	wind.style.opacity = i;
	wind.style.transform = "scale("+i+")";


	if (i<=0){

		wind.style.display = "none";
		clearInterval(id);
		idOpen = setInterval(function(){ opened(idOpen, divOpen); }, vitesse);


	}

}

function opened(id, wind){


	i += 0.01;

	wind.style.opacity = i;
	wind.style.transform = "scale("+i+")";
	wind.style.display = "flex";

	if (i>=1){

		clearInterval(id);

	}
}


about.addEventListener("click", function(){



		idClose = setInterval(function(){ closed(idClose, divLinks, divAbout); }, vitesse);
});

closeAbout.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divAbout,divLinks ); }, vitesse);
});

skills.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divSkills); }, vitesse);
});

closeSkills.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divSkills,divLinks ); }, vitesse);
});


work.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divWork); }, vitesse);
});

closeWork.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divWork,divLinks ); }, vitesse);
});


educ.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divEduc); }, vitesse);
});

closeEduc.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divEduc,divLinks ); }, vitesse);
});


port.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divPort); }, vitesse);
});

closePort.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divPort,divLinks ); }, vitesse);
});


object.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divObject); }, vitesse);
});

closeObject.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divObject,divLinks ); }, vitesse);
});


service.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divService); }, vitesse);
});

closeService.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divService,divLinks ); }, vitesse);
});


hobbies.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divHobbies); }, vitesse);
});

closeHobbies.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divHobbies,divLinks ); }, vitesse);
});


contact.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divLinks, divContact); }, vitesse);
});

closeContact.addEventListener("click", function(){

	idClose = setInterval(function(){ closed(idClose, divContact,divLinks ); }, vitesse);
});

//================================================================================================


var aboutScroll = document.getElementById("aboutScroll");
var aboutContent = document.getElementById('aboutContent');


var s = 0;
function up (div){

	s-=3;
	div.style.top = s+"px";

	if (s <= -180){

		s= -180;
	}

}

function down (div){

	s+=3;
	div.style.top = s+"px";
	if (s >= 0){

		s= 0;
	}

}

divAbout.addEventListener("wheel", function(e){

	if (e.deltaY < 0) {

		down(aboutContent);
	}
	if (e.deltaY > 0) {

		up(aboutContent);
	    
	}
});





