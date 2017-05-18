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
	var selected = document.getElementById("products").value;
	document.getElementById("price").innerHTML = parseFloat(prices[document.getElementById(selected).value]).toFixed(2);
	if(!(count[document.getElementById(selected).value] >= 0)){	count[document.getElementById(selected).value] = 0;
	}
}
function addPrice(){
	var selected = document.getElementById("products").value;
	var d = document.getElementById(selected); //shortcut
	if(count[d.value] > 0){
		alert("You have already selected this option!\nPlease select the increase button on the right if you would like to purchase more.");
	}
	else{
		total += prices[d.value];
		document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
		count[d.value] = 1;
		document.getElementById("productlist").innerHTML += "<option value='"+d.value+"'>"+d.value+" x"+count[d.value]+"</option>";
	}
}
function increaseAmount(){
	if(productlist.value == ""){
		alert("You need to select an option!");
		return;
	}
	total += prices[productlist.value];
	document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
	count[productlist.value]++;
	productlist.options[productlist.selectedIndex].text = productlist.value +" x"+count[productlist.value];
}
function decreaseAmount(){
	if(productlist.value == ""){
		alert("You need to select an option!");
		return;
	}
	count[productlist.value]--;
	total -= prices[productlist.value];
	document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
	if(count[productlist.value] == 0){
		productlist.remove(productlist.selectedIndex);
	}
	productlist.options[productlist.selectedIndex].text = productlist.value +" x"+count[productlist.value];
}
function removeProduct(){
	if(productlist.value == ""){
		alert("You need to select an option!");
		return;
	}
	total = Math.abs(total - prices[productlist.value]*count[productlist.value]);
	document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
	count[productlist.value] = 0;
	productlist.remove(productlist.selectedIndex);
}
function resetForm(){
	location.reload();
}
function validateEmail(){  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(document.getElementById("email").value.match(mailformat)){
		return true;
	}
	else{
		alert("Your email address is invalid!");
		document.getElementById("email").value = "";
		document.getElementById("email").focus();
	}
}  
var productlist = document.getElementById("productlist");
var count = new Array();
count["Guppy"] = 0;
var total = 0;
var prices = new Array();
prices["Guppy"]=0.80;
prices["Fantail goldfish"]=1.00;
prices["Oranda goldfish"]=1.30;
prices["Neon tetra"]=0.80;
prices["Clown fish"]=31.40;
prices["Butterfly fish"]=32.00;
prices["Angel fish"]=70.00;
prices["Dory fish"]=30.00;
prices["Tropical flakes"]=6.50;
prices["Algae wafers"]=11.90;
prices["Bloodworms"]=2.99;
prices["Hex shield"]=43.00;
prices["Wonder shell"]=1.99;
prices["General cure"]=8.99;
prices["Regular tank"]=680.00;
prices["Premium tank"]=349.00;
prices["Brandy fish bowl"]=39.99;
prices["Water pump"]=18.99;
prices["Water plant"]=17.99;
prices["Artificial corals"]=3.00;
prices["Castle house"]=14.99;