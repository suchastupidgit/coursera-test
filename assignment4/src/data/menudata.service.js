(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // Elegant simple version
  service.getAllCategories = function() {
    return $http.get(ApiBasePath + "/categories.json")
      .then(function(response) {
        return response.data;
      });
  };

  // Elegant simple version
  service.getItemsForCategory = function(categoryShortName) {
    //return $http.get(ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    var config = {};
    if (categoryShortName) {
      config.params = {'category': categoryShortName};
    }
    return $http.get(ApiBasePath + "/menu_items.json", config)    
      .then(function(response) {
        return response.data.menu_items;
      });
  };

}

})();
