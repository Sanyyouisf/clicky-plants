console.log("is working");

var plantsHolder = document.getElementById("plantsHolder"); 
var plantsButton = document.getElementById("showPlants");
// var plants = ["mercury","earth","mars","jupiter","saturn","uruans","pluto"];
var planetBoxes =document.getElementById('plantBox')

var planets = [
    {
        name:"Mercury",
        url: "http://kgov.com/files/images/science/mercury-RSF.jpg"
    },
    {
        name:"Venus",
        url: "https://s-media-cache-ak0.pinimg.com/originals/40/89/de/4089def9e4ce2b1c408532ed6d7613c2.jpg"
    },
    {
        name:"Earth",
        url: "http://sen.com/thumbs/1024x576/img/142981908433451429819417.jpg"
    },
    {
        name:"Mars",
        url: "http://www.outerspaceuniverse.org/wp-content/uploads/planet-mars1.jpg"
    },
    {
        name:"Jupiter",
        url: "http://www.solarspace.co.uk/PlanetPics/Jupiter/jupiter.jpg"
    },
    {
        name:"Saturn",
        url: "http://nautilus.fis.uc.pt/astro/img/ss/saturno/saturno_intro.jpg"
    },
    {
        name:"Uranus",
        url: "http://www.seasky.org/solar-system/assets/images/uranus03_sk11.jpg"
    },
    {
        name:"Neptune",
        url: "http://www.seasky.org/solar-system/assets/images/neptune02_sk12.jpg"
    }
];

plantsButton.addEventListener("mouseenter", function(){
//when hover over with the mouse execute the function
// when click the button excute the function
	plantsHolder.innerHTML += "";
	for (var i=0 ; i<planets.length ;++i ){
		var newPlanets= "";
		 newPlanets += `<div class="planetBox" id="planetsBox-${i}">`;
		 newPlanets += `<div class= "plantsName hidden"> ${planets[i].name} </div>`;
		 newPlanets+= `<img class= "planetImage" src="${planets[i].url}" >`
		 newPlanets += `</div>`
		
		// add new line after every element.
		//` this called teck mark "above tab on the kb" identify the javascript variable in ${}
		// console.log(newPlanets);
		plantsHolder.innerHTML += 	newPlanets;
	}
	console.log(" you hover over the link");
// console.log("button is pressed");
});

// when click in the image with planetImage console it 

function showMeMonkey(event){
if (event.target.className==='planetImage'){

console.log('eventworks',event);
console.log('uniqId',event.target.parentNode.id);
console.log('text?',event.target.previousSibling);
event.target.previousSibling.classList.remove('hidden');
}
}

document.body.addEventListener("click" ,showMeMonkey );

