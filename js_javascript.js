/*function transparent() {
	var test = event.target;
	if (test.tagName === "IMG") {
		document.querySelector(".testbox").setAttribute("id", "noopacity");*//*.setAttribute("id", "noopacity");*/
/*	}	
};
*/
/*
document.getElementsByTagName("img").addEventListener("mouseover", transparent);

var img = document.getElementsByTagName("img");*/
/*var circle = document.querySelector(".circle-container");
circle.addEventListener("mouseover" ,transparent);

function test () {
	if (event.target.id === "img_1") {
	document.querySelector(".testbox").setAttribute("id", "img_1")
	}
	else if (event.target.id === "img_2") {
	document.querySelector(".testbox").setAttribute("id", "img_2")
	}
	else if (event.target.id === "img_3") {
	document.querySelector(".testbox").setAttribute("id", "img_3")
	}
	else if (event.target.id === "img_4") {
	document.querySelector(".testbox").setAttribute("id", "img_4")
	}
	else if (event.target.id === "img_5") {
	document.querySelector(".testbox").setAttribute("id", "img_5")
	}
	else if (event.target.id === "img_6") {
	document.querySelector(".testbox").setAttribute("id", "img_6")
	}
}
*/

/*circle.addEventListener("mouseover" ,test);*/

/*This is to make sure that when you click one a fruit, it appears in the middle of the circle*/
var circle = document.querySelector(".circle-container");

circle.addEventListener("click" ,testClick);



function actionValid() {
	var target = event.target.id;
	if (target==="fotoInCircleLeft"||target==="fotoInCircleCenter"||target==="fotoInCircleRight") {
		return false;
	}
	else {
		return true;
	}
}

var countAction = 1;

function testClick() {
	if (actionValid()) {
		var target = event.target.id;
		var img = document.getElementById(target).getAttribute("src");
		if (countAction == 1) {
			document.querySelector("#fotoInCircleLeft").setAttribute("src", img);
			countAction = 2;
		}
		else if (countAction==2) { 
			document.querySelector("#fotoInCircleCenter").setAttribute("src", img);
			countAction = 3;
		}
		else if (countAction==3) { 
			document.querySelector("#fotoInCircleRight").setAttribute("src", img);
			countAction = 1;
		}
	}
}





/*function addImg() {
	if (document.querySelector())
}*/

var toevoegtoets = document.querySelector("#toevoegtoets");
toevoegtoets.addEventListener("click", addToKoker)

function addToKoker () {
	console.log("workingggg")
}

var kokerBox = document.querySelector("#kokerBox");

/*When you hover the images, you get a box to the left with information*/


/*
function test () {
		if (actionValid()) {

			function addBox () {
			var target = event.target.id;
			var box = document.querySelector(".testbox");
			console.log(target);
				function testbox () { box.setAttribute("id", target);
				}
			t*//*estbox();
			var h1 = document.createElement("h1");
			var text = document.createTextNode("HOOFDING");
			h1.appendChild(text);
			box.appendChild(h1);
			}

			if (countAction ==1) {

				addBox();

			countAction = 2;

			}
			else {
				var h1 = document.createElement("h1");
			var text = document.createTextNode("HOOFDING");
				h1.removeChild(text);
				box.removeChild(h1);
				addBox();
			}

		}*/
/*}
}*/

var circle = document.querySelector(".circle-container");
function test() {
	var target=event.target.id;
	console.log(target);
}

circle.addEventListener("mouseover" ,test);

