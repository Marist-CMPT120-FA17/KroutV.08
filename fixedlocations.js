//Ian Krout
//Scores and Movements
var Location=[]
//Ability for player to enter text
 
 function btnEnter_click() {
 var userText = document.getElementById("txtCommand").value;
 var response = "";
     if (userText === "N" || userText === "n") {
         response = btnNorth();
     } else {
         if (userText === "S" || userText === "s") {
             response = btnSouth();
         } else {
             if (userText === "E" || userText === "e") {
                 response = btnEast();
             } else {
                 if (userText === "W" || userText ==="w") {
                     response = btnWest();
				 } else {
					if (userText === "help") {
						HelpMessage ();
					} else { 
						if (userText === "take") {
						TakeItem ();
						} else {
							if (userText === "list") {
							listInventory ();
                 } else {
                     ErrorMessage();
				 }
                 }
             }
         }
     }
 }
 }
 }

function Locations(id, name, description, item){
	 this.id = id;
	 this.name = name;
	 this.description = description;
	 this.item = item;
	 this.check = false;
		function toString () {
				return description;
	}
}
	function init () {
	Location.push (locationZero)
	var locationZero = new Locations (0, "Main Entrance", "1. You enter Donnelly Hall in a panic realizing your dog, Donnelly, has gotten loose and made his way to his favorite building. You must find him!", "map");
	display(locationZero.toString());
	}
	
	
	var locationOne = new Locations (1, "Security Office", "2. You are at security, they say they saw your dog but can't say where he is for sure since its a circular building...Security offers you a key to all the rooms (enter take to pick up key)", "key");
	var locationTwo = new Locations (2, "Camera Room", "3. You rush to the back room to check the security cameras and see your dog running in circles", null );
	var locationThree = new Locations (3, "Fashion Lab", "8.You are the fashion lab and see nothing but clothes. Need a new coat? enter take.", "coat");
	var locationFour = new Locations (4, "Outside Building", "You leave the building. Try again.", null); 
	var locationFive = new Locations (5, "Chemistry Lab", "4.You head down to the chemistry lab and hear barking", null);
	var locationSix = new Locations (6, " Found Dog", "6. Donnelly! You found your dog, sitting by the bathroom.", null);
	var locationSeven = new Locations (7, " DN Cafe", "9. You are at the DN Cafe, maybe Donnelly was attracted to the food?", null);
	var locationEight = new Locations (8, "Sub Line", "10. Nothing but subs in here... press take to grab a quick snack", "hoagie");
	var locationNine = new Locations (9, "Restroom", "5. You check the restroom to see if your dog is taking a drink from the toliet", null);
	var locationTen = new Locations (10, "Computer Lab", "7. Nothing but students studying in the computer lab.", null);
	
	Location.push ( locationZero,locationOne,locationTwo,locationThree,locationFour,locationFive,locationSix,locationSeven,locationEight,locationNine,locationTen);
	console.log(Location);
function init () {
	if Location [0] {
		btnNorth = [1];
		btnSouth = [2];
		btnEast = [3];
		btnWest = [4];
	}
}
		 