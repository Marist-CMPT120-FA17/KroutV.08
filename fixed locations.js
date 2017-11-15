//Ian Krout
//Scores and Movements

 var inventory = [];
 var Location = [];
 var items = [];

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
 
 function Locations (id,name,description,item,toString()){
	 this.id = id;
	 this.name = name;
	 this.description = description;
	 this.item = item;
	 
	 this.display = function (){
		 UpdateDisplay(this.description);
	 }		 
	}
	function init() {
		var locationZero = new Locations
		locationZero.id = 0;
		locationZero.name = "Main Entrance"
		locationZero.description = "1. You enter Donnelly Hall in a panic realizing your dog, Donnelly, has gotten loose and made his way to his favorite building. You must find him!"
		locationZero.item = "map"
		
		locationZero.display ();
	}
	
	Location.push ( locationZero,locationOne,locationTwo,locationThree,locationFour,locationFive,locationSix,locationSeven,locationEight,locationNine,locationTen);
	
	
	//Updating the text box
 function UpdateDisplay(msg) {
     var target = document.getElementById("maintext");
     target.value = msg + "\n\n";
 }
 function UpdateInventory(msg) {
	var target = document.getElementById ("inventory");
	target.value = msg + "\n\n";
 }
	
	
