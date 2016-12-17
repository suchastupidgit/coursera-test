(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['zitems'];
function CategoriesController(zitems) {
  var categories = this;
  categories.oitems = zitems;
}

})();
