(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/category-list.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      zitems: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items list page
  .state('items', {
    url: '/categories/:catItem',
    params: {
      catItem: null
    },
    templateUrl: 'src/menuapp/templates/item-list.template.html',
    controller: 'ItemsController as items',
    resolve: {
      citems1: ['$stateParams', 'MenuDataService',
               function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.catItem);
      }]
    }
  })
  
}

})();
