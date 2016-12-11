(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'shoppingList.html',
        scope: {
            items: '<qqitems',
            myTitle: '@title',
            onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'xlist',
        bindToController: true
    };

    return ddo;
}

function FoundItemsDirectiveController() {
    var xlist = this;

    xlist.isEmptyList = function () {
        if (xlist.items.length > 0)
            return false;
        else
            return true;
    };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrow = this;

    narrow.searchTerm = "";

    narrow.doIt = function () {
      var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
      promise.then(function (response) {
        narrow.found = response;
      })
      .catch(function (error) {
        console.log("Something is rotten in Denmark.");
      });
    }

    narrow.removeItem = function(index) {
        narrow.found.splice(index, 1);
    }

}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
      }).then(function (response) {

        //Filtering the response items by searchTerm
        var foundItems = [];
        var count = response.data.menu_items.length;
        for (var i = 0; i < count; i++) {
          if (response.data.menu_items[i].description.search(searchTerm) > 0)
            foundItems.push(response.data.menu_items[i]);
        }

        return foundItems;
      });
    };

}

}) ();