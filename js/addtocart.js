var totalAmount = 0;
var totalItems = 0;

var itemAmount = 0;
var productCount = 0;

function addToCart(itemAmount, productCount) {
	totalAmount += itemAmount;
	totalItems += productCount;
	
	$("#cart-amount")[0].innerHTML = "$" + totalAmount;
	$("#product-count")[0].innerHTML = totalItems;
}