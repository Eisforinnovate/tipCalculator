function computeTaxBill(base, percentage){
	return base * percentage;
}

window.onload = function(){
	var baseCost = parseFloat(prompt("Enter the dollar value for your meal, pre-tax (e.g., $15.74): $")),
		taxRate = parseFloat(prompt("Enter the tax rate as a % (ex. 15%, 22%"))/ 100,
		tipRate = parseFloat(prompt("Enter the tip you'd like to leave for your server"))/100,
		taxValue = computeTaxBill(baseCost, taxRate),
		subTotal = baseCost + taxValue,
		tipCost = computeTaxBill(subTotal, tipRate),
		totalCost = subTotal + tipCost;
		finalMessage = ("Tax for your meal is $" + taxValue.toFixed(2) + '. ' +
								"You should leave $" + tipCost.toFixed(2) + " for tip. " +
								"The total cost for your meal is $" + totalCost.toFixed(2) + '.');

		alert(finalMessage);

}


