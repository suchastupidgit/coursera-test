(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.buyItem = function (itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var toBuyItems = [
  { name: "Coffee", quantity: 2},
  { name: "Tea", quantity: 7},
  { name: "Beer", quantity: 12 },
  { name: "Seltzer", quantity: 5 },
  { name: "Ginger Ale", quantity: 4 }
];

  // List of already bought items
  var alreadyBoughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
      return alreadyBoughtItems;
  }

  service.buyItem = function (itemIdex) {
    var item = { name: toBuyItems[itemIdex].name, quantity: toBuyItems[itemIdex].quantity };
    alreadyBoughtItems.push(item);
    toBuyItems.splice(itemIdex, 1);
  };

}

})();
