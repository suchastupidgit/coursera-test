(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['citems1'];
function ItemsController(citems1) {
  var items = this;
  items.citems2 = citems1;
  console.log("Hello from Items controller");
}

})();
