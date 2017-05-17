function checkForm() {
    var d = document.getElementById('orderform'); // just a shortcut
    var errors = false;
    var errorMsg = "";
// basic check required fields
    if (d.firstname.value == "") {
        errorMsg += "Please enter your first name.\n";
        errors = true;
    }
	if (d.lastname.value == ""){
		errorMsg += "Please enter your last name.\n";
		errors = true;
	}
    // if errors exist, popup error message
    if (errors)
        alert(errorMsg);
    // return true (submit form) or false (don't submit form) depending on errors
    return !errors;
}
function firstName(){
	if (firstname.value != "") {
        document.mainForm.firstNameTick.src = "tick.png";
        document.mainForm.firstNameTick.alt = "tick";
    }
    else {
        document.mainForm.firstNameTick.src = "cross.png";
        document.mainForm.firstNameTick.alt = "cross";
    }
}
function lastName(){
	if (lastname.value != "") {
        document.mainForm.lastNameTick.src = "tick.png";
        document.mainForm.lastNameTick.alt = "tick";
    }
    else {
        document.mainForm.lastNameTick.src = "cross.png";
        document.mainForm.lastNameTick.alt = "cross";
    }
}
function checkGenderClick(){
	document.mainForm.genderTick.src = "tick.png";
	document.mainForm.genderTick.alt = "tick";
}
function resetForm() {
    var resetChoice = confirm('Reset all fields?');
    if (resetChoice) {
        console.log("Resetting form modifications.");
        // note: could do this with an array of required fields
		document.mainForm.firstNameTick.src = "cross.png";
        document.mainForm.firstNameTick.alt = "cross";
        document.mainForm.lastNameTick.src = "cross.png";
        document.mainForm.lastNameTick.alt = "cross";
        document.mainForm.genderTick.src = 'cross.png';
        document.mainForm.genderTick.alt = 'cross';
        document.mainForm.areas.style.background = "#fff";
		document.getElementById('mainForm').reset();
    }
    return resetChoice;
}
function productType(){
	var product = document.getElementById("products");
	var selected = product.value;
	//shortcuts
	var freshwater = document.getElementById("freshwater");
	var saltwater = document.getElementById("saltwater");
	var fishfood = document.getElementById("fishfood");
	var medications = document.getElementById("medications");
	var fishtanks = document.getElementById("fishtanks");
	var decorations = document.getElementById("decorations");
	
	if (selected == "saltwater")
	{
		saltwater.style.display = "";
		freshwater.style.display ="none";
		fishfood.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "freshwater")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="";
		fishfood.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "fishfood")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfood.style.display = "";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "medications")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfood.style.display = "none";
		medications.style.display ="";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "fishtanks")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfood.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "decorations")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfood.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "";
		productPrice();
	}
}
function productPrice(){
	var product = document.getElementById("products");
	var selected = product.value;
	document.getElementById("price").innerHTML = parseFloat(prices[document.getElementById(selected).value]).toFixed(2);
}
function addPrice(){
	
}
var prices = new Array();
prices["guppy"]=0.80;
prices["fgoldfish"]=1.00;
prices["ogoldfish"]=1.30;
prices["neontetra"]=0.80;
prices["clownfish"]=31.40;
prices["butterflyfish"]=32.00;
prices["angelfish"]=70.00;
prices["doryfish"]=30.00;
prices["flakes"]=6.50;
prices["wafers"]=11.90;
prices["bloodworms"]=2.99;
prices["hexshield"]=43.00;
prices["shell"]=1.99;
prices["generalcure"]=8.99;
prices["regulartank"]=680.00;
prices["premiumtank"]=349.00;
prices["fishbowl"]=39.99;
prices["waterpump"]=18.99;
prices["waterplant"]=17.99;
prices["corals"]=3.00;
prices["castlehouse"]=14.99;