



var larg = window.innerWidth;
var haut = window.innerHeight;

var plan = document.getElementById('plan');

var titre = document.getElementById('titre');
var informations = document.getElementById('informations');

var wPlan = plan.offsetWidth;
var hPlan = plan.offsetHeight;

var hMiddle = (haut/2)-(hPlan/2);
var wMiddle = (larg/2)-(wPlan/2);

	plan.style.top = hMiddle+"px";
	plan.style.left = wMiddle+"px";

	informations.style.bottom = 5+"%";
	informations.style.right = 5+"%";

	titre.style.top = 5+"%";
	titre.style.left = 5+"%";

console.log(hMiddle+" "+haut+" "+plan.offsetTop);