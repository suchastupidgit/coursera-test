(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http']
function SignUpController($http) {
  var signUpCtrl = this;

  signUpCtrl.submit = function () {
    signUpCtrl.user.favorite = signUpCtrl.user.favorite.toUpperCase();
    var ApiBasePath = "https://ss-course5.herokuapp.com";
    $http.get(ApiBasePath + "/menu_items/" + signUpCtrl.user.favorite + ".json")    
      .then(function(response) {
        signUpCtrl.user.favoriteName = response.data.name;
        signUpCtrl.user.favoriteDescription = response.data.description;

        var s = JSON.stringify(signUpCtrl.user);
        console.log("s = " + s);
        window.localStorage.setItem('Hoowah', s);

        console.log("We're Back Baby!");
        signUpCtrl.favoriteError = false;
        signUpCtrl.completed = true;
      },
      function error(response) {
         console.log("E R R O R !");
         signUpCtrl.favoriteError = true;
         signUpCtrl.completed = false;
      });

  };
}

})();
