(function(){
'use-strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ShoppingListAddController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListAddController(ShoppingListCheckOffService){
	var itemAdder = this;

	itemAdder.itemName = "";
	itemAdder.itemQuantity = "";

	itemAdder.addItem = function(){
		ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
	}
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;

	toBuy.items = ShoppingListCheckOffService.getToBuyItems();

	toBuy.showOrHide = function(){
		return ShoppingListCheckOffService.getToBuyBooleanValue();
	}

	toBuy.buyItem = function(id){
		ShoppingListCheckOffService.buyItem(id);
	}

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var alreadyBought = this;
	
	alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

	alreadyBought.showOrHide = function(){
		return ShoppingListCheckOffService.getBoughtBooleanValue();
	}
}

function ShoppingListCheckOffService(){
	var service = this;

	var toBuyItems = [{name: "Cookie(s)", quantity: 3}, {name: "Egg(s)", quantity: 10}, {name: "Coke(s)", quantity: 5}, {name: "Cake(s)", quantity: 7}, {name: "Lemon(s)", quantity: 2}];
	var boughtItems = [];

	service.addItem = function(name, quantity){
		var item = {};
		item.name = name;
		item.quantity = quantity;

		toBuyItems.push(item);
	}

	service.buyItem = function(id){
		var itemToBuy = toBuyItems.splice(id, 1);
		boughtItems.push(itemToBuy[0]);
	}

	service.getToBuyItems = function(){
		return toBuyItems;
	}

	service.getBoughtItems = function(){
		return boughtItems;
	}

	service.getToBuyBooleanValue = function(){
		return (toBuyItems.length == 0)
	}

	service.getBoughtBooleanValue = function(){
		return (boughtItems.length == 0)
	}
}

})();