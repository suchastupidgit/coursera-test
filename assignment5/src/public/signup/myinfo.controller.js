(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

function MyInfoController() {
  var myInfoCtrl = this;

  myInfoCtrl.message = "??????";
  myInfoCtrl.flag = false;

  myInfoCtrl.user = {};

  var info = window.localStorage.getItem('Hoowah')
  if (info != null) {
    console.log("info: " + info);
    myInfoCtrl.user = JSON.parse(info);
    console.log("Oh boy: " + myInfoCtrl.user);
    myInfoCtrl.flag = true;

    myInfoCtrl.pic = "https://ss-course5.herokuapp.com/images/" +
                  myInfoCtrl.user.favorite + ".jpg"
    console.log("pic = " + myInfoCtrl.pic);                
  }
  else {
    myInfoCtrl.message = "Not signed up yet.  Sign up now!";
  }
  console.log("myInfoCtrl = " + myInfoCtrl);

}

})();
