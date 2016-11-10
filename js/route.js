var app = angular.module("shoppingCart", ["ngRoute",'ngCookies','ngStorage']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "cart.html",
        controller : "myCtrl"
    })
    .when( '/cart-list', {
        templateUrl:"cartList.html",
         controller : "cartCtrl"
    });
 });


    