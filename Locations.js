///Ian Krout 
 //Score and location visits

 var score = 0;
 var inventory = [];
 var Location = [];
 var Move = [];
 var items = [];
// var currentLoc = 0;

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
 
 function Locations(id, name, description, item, north, south, west, east) {
	 this.id = id;
	 this.name = name;
	 this.description = description;
	 this.item = item;
	 this.north = north;
	 this.south = south;
	 this.west = west;
	 this.east = east;
	 this.check = 0;
	 this.toString = function () {
			return(this.description);
			}
	}
	
	var locationZero = new Locations (0, "Main Entrance", "1. You enter Donnelly Hall in a panic realizing your dog, Donnelly, has gotten loose and made his way to his favorite building. You must find him!", "map", 1, 4,5,10);
	var locationOne = new Locations (1, "Security Office", "2. You are at security, they say they saw your dog but can't say where he is for sure since its a circular building...Security offers you a key to all the rooms (enter take to pick up key)", "key", 2,0,-1,-1);
	var locationTwo = new Locations (2, "Camera Room", "3. You rush to the back room to check the security cameras and see your dog running in circles", null, -1,1,-1,-1 );
	var locationThree = new Locations (3, "Fashion Lab", "8.You are the fashion lab and see nothing but clothes. Need a new coat? enter take.", "coat",-1,-1,10,7 );
	var locationFour = new Locations (4, "Outside Building", "You leave the building. Try again.", null, 0,-1,-1,-1); 
	var locationFive = new Locations (5, "Chemistry Lab", "4.You head down to the chemistry lab and hear barking", null,-1,-1,9,0);
	var locationSix = new Locations (6, " Found Dog", "6. Donnelly! You found your dog, sitting by the bathroom.", null, -1,-1,-1,-1);
	var locationSeven = new Locations (7, " DN Cafe", "9. You are at the DN Cafe, maybe Donnelly was attracted to the food?", null,-1,-1,);
	var locationEight = new Locations (8, "Sub Line", "10. Nothing but subs in here... press take to grab a quick snack", "hoagie");
	var locationNine = new Locations (9, "Restroom", "5. You check the restroom to see if your dog is taking a drink from the toliet", null, -1,-1,6,5);
	var locationTen = new Locations (10, "Computer Lab", "7. Nothing but students studying in the computer lab.", null);
	
	
	location[0] = locationZero;
	location[1] = locationOne;
	location[2] = locationTwo;
	location[3] = locationThree;
	location[4] = locationFour;
	location[5] = locationFive;
	location[6] = locationSix;
	location[7] = locationSeven;
	location[8] = locationEight;
	location[9] = locationNine;
	location[10] = locationTen;
	
	Location.push ( locationZero,locationOne,locationTwo,locationThree,locationFour,locationFive,locationSix,locationSeven,locationEight,locationNine,locationTen);
	console.log(Location);
	currentLoc=Location[0].id
	console.log(currentLoc);
	console.log(location[currentLoc].description);
	console.log(location[currentLoc].north);
	
	function startup() {
	var message = location[currentLoc].description;
		UpdateDisplay(message);
 }
	
function Items (id, name, description) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.check = 0;
}
	var key = new Items (0,"key", "you have picked up a key");
	var hoagie = new Items (1,"hoagie", "you have picked up a hoagie");
	var map = new Items (2,"map","you have picked up a map");
	var coat = new Items (3,"coat", "you have picked up a coat");

	items.push (key, hoagie, map, coat);
	console.log(items);
	
 //Nested if to pick up Items
function TakeItem () {
	if (currentLoc==1) {
		if (key.check == 0) {
			inventory.push(key.name);
			console.log(inventory);
			UpdateInventory(key.description)
			key.check = 1;
		}
	}
	if (currentLoc==8) {
		if (hoagie.check == 0) {
			inventory.push(hoagie.name);
			console.log(inventory);
			UpdateInventory(hoagie.description)
			hoagie.check = 1;
		}
	}
	if (currentLoc==0) {
		if (map.check == 0) {
			inventory.push(map.name);
			console.log(inventory);
			UpdateInventory(map.description)
			map.check = 1;
		}
	}
	if (currentLoc==3) {
		if (coat.check == 0) {
			inventory.push(coat.name);
			console.log(inventory);
			UpdateInventory(coat.description)
			coat.check = 1;
		}
	}
}
console.log(inventory);
//Listing Inventory
 function listInventory () {
	var message = "inventory:\n" + inventory;
	UpdateInventory(message)
 }

 //Error Message/Help Message Functions
 function ErrorMessage() {
     var message = "I do not understand your commands. Valid commands are N,S,E,W,help,take and list"
     UpdateDisplay(message);
 }
 function HelpMessage () {
		alert ( " Click buttons to move in the choosen direction or enter values N,S,E,W to move in accompanying directions. Refer to map for locations. Enter take to pick up items when possible and list to show your inventory. Enjoy and find your dog!")
		var message = "Click buttons to move in the choosen direction or enter values N,S,E,W to move in accompanying directions. Refer to map for locations. Enter take to pick up items when possible and list to show your inventory. Enjoy and find your dog! "
			UpdateDisplay(message);
 }

 //Button Handlers for Directions
 //North
 function btnNorth() {
	var temp = location[currentLoc].north;
	currentLoc = temp;
	console.log(temp);
	startup();
 }
 function btnSouth() {
	var temp = location[currentLoc].south;
	currentLoc = temp;
	console.log(temp);
	startup();
 }
 function btnEast() {
	var temp = location[currentLoc].east;
	currentLoc = temp;
	console.log(temp);
	startup();
 }
 function btnWest() {
	var temp = location[currentLoc].west;
	currentLoc = temp;
	console.log(temp);
	startup();
 }
 
 //Updating the text box
 function UpdateDisplay(msg) {
	 console.log(msg);
     var target = document.getElementById("maintext");
	 console.log(target);
     target.value = msg + "\n\n";
 }
 function UpdateInventory(msg) {
	var target = document.getElementById ("inventory");
	target.value = msg + "\n\n";
 }
