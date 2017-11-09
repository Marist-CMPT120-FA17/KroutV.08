 //Ian Krout 
 //Score and location visits

 var score = 0;
 var inventory = [];
 var Keytaken = 0;
 var Hoagietaken= 0;
 var currentLoc = 0;

 var VisitedLoc0 = 0;
 var VisitedLoc1 = 0;
 var VisitedLoc2 = 0;
 var VisitedLoc3 = 0;
 var VisitedLoc4 = 0;
 var VisitedLoc5 = 0;
 var VisitedLoc6 = 0;
 var VisitedLoc7 = 0;
 var VisitedLoc8 = 0;
 var VisitedLoc9 = 0;
 var VisitedLoc10 = 0;


 // Switch Case Initi. Loads first location upon opening page
 function init() {
     look();
 }
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
             if (userText === "E" || "e") {
                 response = btnEast();
             } else {
                 if (userText === "W" || "w") {
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
 
 function Location ( id, name, description, item, toString()) {
	 this.id = id;
	 this.name = name;
	 this.description = description;
	 this.item = item;
	}
	var locationZero = new Location ("0", "Main Entrance", "You enter Donnelly Hall in a panic realizing your dog, Donnelly, has gotten loose and made his way to his favorite building. You must find him!", "map");
	var locationOne =
	var locationTwo = 
	var locationThree =
	var locationFour = 
	var locationFive =
	var locationSix =
	var locationSeven =
	var locationEight =
	var locationNine =
	var locationTen =
	
	
 //Nested if to pick up Items
function TakeItem () {
	if (currentLoc === 1) {
		if (Keytaken == 0) {
			inventory.push("Key");
			var message = "you have picked up a key";
			UpdateInventory(message)
			Keytaken = 1;
		}
	}
	if (currentLoc === 8) {
		if (Hoagietaken == 0) {
		inventory.push("Hoagie");
			var message = "you have picked up a hoagie"
			UpdateInventory(message)
			Hoagietaken = 1;
		}
	}
}
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
 
 //Functions for each location to display message
 function MainEntrance() {
     var message = "1. You enter Donnelly Hall in a panic realizing your dog, Donnelly, has gotten loose and made his way to his favorite building. You must find him!";
     UpdateDisplay(message);
     if (VisitedLoc0 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc0 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }
 function SecurityOffice() {
   	var message = "2. You are at security, they say they saw your dog but can't say where he is for sure since its a circular building...Security offers you a key to all the rooms (enter take to pick up key)";
	UpdateDisplay(message);
     if (VisitedLoc1 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc1 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function CameraRoom() {
     var message = "3. You rush to the back room to check the security cameras and see your dog running in circles";
     UpdateDisplay(message);
     if (VisitedLoc2 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc2 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function FashionLab() {
     var message = "8.You are the fashion lab and see nothing but clothes.";
     UpdateDisplay(message);
     if (VisitedLoc3 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc3 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function OutsideBuilding() {
     var message = "You leave the building. Try again.";
     UpdateDisplay(message);
     if (VisitedLoc4 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc4 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function ChemistryLab() {
     var message = "4.You head down to the chemistry lab and hear barking";
     UpdateDisplay(message);
     if (VisitedLoc5 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc5 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function FoundDog() {
     var message = "6. Donnelly! You found your dog, sitting by the bathroom.";
     UpdateDisplay(message);
     if (VisitedLoc6 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc6 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function DNCafe() {
     var message = "9. You are at the DN Cafe, maybe Donnelly was attracted to the food?";
     UpdateDisplay(message);
     if (VisitedLoc7 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc7 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function SubLine() {
     var message = "10. Nothing but subs in here... press take to grab a quick snack";
     UpdateDisplay(message);
     if (VisitedLoc8 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc8 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function Restroom() {
     var message = "5. You check the restroom to see if your dog is taking a drink from the toliet";
     UpdateDisplay(message);
     if (VisitedLoc9 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc9 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }

 function Computerlab() {
     var message = "7. Nothing but students studying in the computer lab.";
     UpdateDisplay(message);
     if (VisitedLoc10 == 0) {
         score += 5;
         document.getElementById("scorebox").value = "Score:" + score;
         VisitedLoc10 = 1;
     } else {
         document.getElementById("scorebox").value = "Score:" + score;
     }
 }
 //Button Handlers for Directions
 //North
 function btnNorth() {
     if (currentLoc === 0) {
         currentLoc = 1;
         look();
         document.getElementById("btnEast").disabled = true;
         document.getElementById("btnWest").disabled = true;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;
     } else {
         if (currentLoc === 1) {
             currentLoc = 2;
             look();
             document.getElementById("btnEast").disabled = true;
             document.getElementById("btnWest").disabled = true;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 4) {
                 currentLoc = 0;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = false;
                 document.getElementById("btnNorth").disabled = false;
             }
         }
     }
     look();
 }
 //South
 function btnSouth() {
     if (currentLoc === 2) {
         currentLoc = 1;
         look();
         document.getElementById("btnEast").disabled = true;
         document.getElementById("btnWest").disabled = true;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;
     } else {
         if (currentLoc === 1) {
             currentLoc = 0;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = false;
         } else {
             if (currentLoc === 0) {
                 currentLoc = 4;
                 look();
                 document.getElementById("btnEast").disabled = true;
                 document.getElementById("btnWest").disabled = true;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = false;
             }
         }
     }
     look();
 }

 //East
 function btnEast() {
     if (currentLoc === 0) {
         currentLoc = 10;
         look();
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 10) {
             currentLoc = 3;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 9) {
                 currentLoc = 5;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
             } else {
                 if (currentLoc === 3) {
                     currentLoc = 7;
                     look();
                     document.getElementById("btnEast").disabled = false;
                     document.getElementById("btnWest").disabled = false;
                     document.getElementById("btnSouth").disabled = true;
                     document.getElementById("btnNorth").disabled = true;
                 } else {
                     if (currentLoc === 7) {
                         currentLoc = 8;
                         look();
                         document.getElementById("btnEast").disabled = true;
                         document.getElementById("btnWest").disabled = false;
                         document.getElementById("btnSouth").disabled = true;
                         document.getElementById("btnNorth").disabled = true;
                     } else {
                         if (currentLoc === 5) {
                             currentLoc = 0;
                             look();
                             document.getElementById("btnEast").disabled = false;
                             document.getElementById("btnWest").disabled = false;
                             document.getElementById("btnSouth").disabled = false;
                             document.getElementById("btnNorth").disabled = false;

                         }
                     }
                 }
             }
         }
     }
     look();
 }
 //West
 function btnWest() {
     if (currentLoc === 0) {
         currentLoc = 5;
         look();
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 5) {
             currentLoc = 9;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 10) {
                 currentLoc = 0;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = false;
                 document.getElementById("btnNorth").disabled = false;
             } else {
                 if (currentLoc === 9) {
                     currentLoc = 6;
                     look();
                     document.getElementById("btnEast").disabled = true;
                     document.getElementById("btnWest").disabled = true;
                     document.getElementById("btnSouth").disabled = true;
                     document.getElementById("btnNorth").disabled = true;
                 } else {
                     if (currentLoc === 3) {
                         currentLoc = 10;
                         look();
                         document.getElementById("btnEast").disabled = false;
                         document.getElementById("btnWest").disabled = false;
                         document.getElementById("btnSouth").disabled = false;
                         document.getElementById("btnNorth").disabled = false;
                     } else {
                         if (currentLoc === 7) {
                             currentLoc = 3;
                             look();
                             document.getElementById("btnEast").disabled = false;
                             document.getElementById("btnWest").disabled = false;
                             document.getElementById("btnSouth").disabled = true;
                             document.getElementById("btnNorth").disabled = true;
                         } else {
                             if (currentLoc === 8) {
                                 currentLoc = 7;
                                 look();
                                 document.getElementById("btnEast").disabled = false;
                                 document.getElementById("btnWest").disabled = false;
                                 document.getElementById("btnSouth").disabled = true;
                                 document.getElementById("btnNorth").disabled = true;
                             }
                         }
                     }
                 }
             }
         }
     }

     look();
 }

 //Switch-Case
 function look() {
     var desc = "";
     switch (currentLoc) {
         case 0:
             MainEntrance();
             break;
         case 1:
             SecurityOffice();
             break;
         case 2:
             CameraRoom();
             break;
         case 3:
             FashionLab();
             break;
         case 4:
             OutsideBuilding();
             break;
         case 5:
             ChemistryLab();
             break;
         case 6:
             FoundDog();
             break;
         case 7:
             DNCafe();
             break;
         case 8:
             SubLine();
             break;
         case 9:
             Restroom();
             break;
         case 10:
             Computerlab();
             break;
     }
 }
 //Updating the text box
 function UpdateDisplay(msg) {
     var target = document.getElementById("maintext");
     target.value = msg + "\n\n";
 }
 function UpdateInventory(msg) {
	var target = document.getElementById ("inventory");
	target.value = msg + "\n\n";
 }