var totalAmount = 0;
var totalItems = 0;

var itemAmount = 0;
var productCount = 0;

function addToCart(itemAmount, productCount) {
	totalAmount += (itemAmount * productCount);
	totalItems += productCount;
	
	$("#cart-amount")[0].innerHTML = "$" + totalAmount;
	sessionStorage.setItem("totalAmount", "$" + totalAmount);
	$("#product-count")[0].innerHTML = totalItems;
	sessionStorage.setItem("totalItems", totalItems);
	
	//should prevent refreshing page on form submit
	//code here
}

$(document).ready(function() {
	//temp solution
	//store values on sessionStorage, does not work on IE
	$("#cart-amount")[0].innerHTML = sessionStorage.getItem("totalAmount"); 
	$("#product-count")[0].innerHTML = sessionStorage.getItem("totalItems");
}); 

var modal;
function openModal() {
	modal = $("#add-to-cart-modal");
	modal.css("display", "block");
}

function closeModal() {
	modal.css("display", "none");
}

//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.css("display", "none");
//    }
//}