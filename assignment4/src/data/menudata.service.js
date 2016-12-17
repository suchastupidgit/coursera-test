(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping catgories and items
  service.categories = [];
  service.items = [];

  service.getAllCategories = function () {
    console.log("getAllCategories()");
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    response.then(function(response) {
      var count = response.data.length;
      console.log("categories count = " + count)
      service.categories.length = 0;
      for(var i = 0; i < count; i++) {
        service.categories.push(response.data[i]);
      }
    });

    return service.categories;
  };

  service.getItemsForCategory = function (categoryShortName) {
    console.log("getItemsForCategory(" + categoryShortName + ")");
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    });

    response.then(function(response) {
      var count = response.data.menu_items.length;
      console.log("items count = " + count)
      service.items.length = 0;
      for(var i = 0; i < count; i++) {
        service.items.push(response.data.menu_items[i]);
      }
    });

    return service.items;
  };


}

})();
