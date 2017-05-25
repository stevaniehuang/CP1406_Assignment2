// feedback form. make comments required if choice is bad or very bad.
function requiredComments(){
	document.getElementById("comment").required = true;
	alert("Please comment below on what could be improved.\nThank you for your time.");
}
function changeRequired(){
	document.getElementById("comment").required = false;
}
function neededComments(){
	document.getElementById("needComments").style.display = "";
	document.getElementById("needComments").required = true;
}
function notNeeded(){
	document.getElementById("needComments").style.display = "none";
	document.getElementById("needComments").required = false;
}
// first dropdown list of product types that changes the second dropdown list of products.
function productType(){
	var product = document.getElementById("products");
	var selected = product.value;
	//shortcuts
	var freshwater = document.getElementById("freshwater");
	var saltwater = document.getElementById("saltwater");
	var fishfoods = document.getElementById("fishfoods");
	var medications = document.getElementById("medications");
	var fishtanks = document.getElementById("fishtanks");
	var decorations = document.getElementById("decorations");
	
	if (selected == "saltwater")
	{
		saltwater.style.display = "";
		freshwater.style.display ="none";
		fishfoods.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "freshwater")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="";
		fishfoods.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "fishfoods")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfoods.style.display = "";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "medications")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfoods.style.display = "none";
		medications.style.display ="";
		fishtanks.style.display = "none";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "fishtanks")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfoods.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "";
		decorations.style.display = "none";
		productPrice();
	}
	if (selected == "decorations")
	{
		saltwater.style.display = "none";
		freshwater.style.display ="none";
		fishfoods.style.display = "none";
		medications.style.display ="none";
		fishtanks.style.display = "none";
		decorations.style.display = "";
		productPrice();
	}
}
// displays the price of the product to the user
function productPrice(){
	var selected = document.getElementById("products").value;
	document.getElementById("price").innerHTML = parseFloat(prices[document.getElementById(selected).value]).toFixed(2);
	if(!(count[document.getElementById(selected).value] >= 0)){	count[document.getElementById(selected).value] = 0;
	}
}
// adds the product to the 'shopping cart'
function addPrice(){
	var selected = document.getElementById("products").value;
	var d = document.getElementById(selected); //shortcut
	if(count[d.value] > 0){
		productlist.selectedIndex = productlist.options.length-1;
		increaseAmount();
	}
	else{
		window.location.href = "orderform.html#orderbox";
		document.getElementById("selPro").style.color = "red";
		total += prices[d.value];
		document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
		count[d.value] = 1;
		document.getElementById("productlist").innerHTML += "<option value='"+d.value+"'>"+d.value+" x"+count[d.value]+"</option>";
		productlist.selectedIndex = productlist.options.length-1;
	}
}
// increases the amount of the product selected
function increaseAmount(){
	if(productlist.value == ""){
		productlist.selectedIndex = 0;
		if(productlist.value == ""){
			alert("You have not selected a product!\nPlease choose a product on the left first.")
			return;
		}
	}
	total += prices[productlist.value];
	document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
	count[productlist.value]++;
	productlist.options[productlist.selectedIndex].text = productlist.value +" x"+count[productlist.value];
}
// decreases the amount of the product selected
function decreaseAmount(){
	if(productlist.value == ""){
		productlist.selectedIndex = 0;
		if(productlist.value == ""){
			alert("You have not selected a product!\nPlease choose a product on the left first.")
			return;
		}
	}
	count[productlist.value]--;
	total -= prices[productlist.value];
	document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
	if(count[productlist.value] == 0){
		productlist.remove(productlist.selectedIndex);
	}
	productlist.options[productlist.selectedIndex].text = productlist.value +" x"+count[productlist.value];
}
// removes the product from the 'shopping cart'
function removeProduct(){
	if(productlist.value == ""){
		productlist.selectedIndex = 0;
		if(productlist.value == ""){
			alert("You have not selected a product!\nPlease choose a product on the left first.")
			return;
		}
	}
	total = Math.abs(total - prices[productlist.value]*count[productlist.value]);
	document.getElementById("total").innerHTML = parseFloat(total).toFixed(2);
	count[productlist.value] = 0;
	productlist.remove(productlist.selectedIndex);
}
// refreshes the whole page as a way to reset the form completely
function resetForm(){
	location.reload();
}
// email validation
function validateEmail(){  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;// regular expression containing valid expressions in an email
	if(document.getElementById("email").value.match(mailformat)){
		return true;
	}
	else{
		alert("Your email address is invalid!");
		document.getElementById("email").focus();
	}
}  
var productlist = document.getElementById("productlist");// shortcut
var count = new Array();// counts the amount of a product
count["Guppy"] = 0;// define the first element in the array, the rest are defined in the function on change of the product selected
var total = 0;// keeps track of the total price
var prices = new Array();// list of all the prices
// defines all the prices of the various products
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