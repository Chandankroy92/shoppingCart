app.controller('myCtrl', ['$http', 'simpleCart', '$scope', '$localStorage', '$location', function($http, simpleCart, $scope,$localStorage, $location){
//    console.log("Hello");
    
     $http.get('product.json').success(function(data){
         $scope.products = data;
     });
    
    simpleCart.init();
    $scope.cart = $localStorage.cart;
   
     
     
     $scope.addItem = function(id, quantity) {
         simpleCart.addItem(id, quantity);
     }
     
     $scope.goto_cart = function() {
         $location.path('/cart-list');
     }

}]);


app.controller('cartCtrl', ['$http', 'simpleCart', '$scope', '$localStorage','$route', function($http, simpleCart, $scope, $localStorage ,$route){
    
    $http.get('product.json').success(function(data){
        $scope.all_products = data;
    
    $scope.cart_ids = $localStorage.cart;
        console.log($localStorage);
    $scope.cart_products = [];
    angular.forEach($scope.cart_ids,function(cart_id){
        angular.forEach($scope.all_products,function(product){
            if(product.id == cart_id.id && cart_id.quantity) {
                var new_obj = {
                    product: product,
                    quantity: cart_id.quantity
                }
                $scope.cart_products.push(new_obj);
            }
        });
    });
        
   $scope.removeProduct = function(index){
         simpleCart.removeItem(index);
         $scope.cart_products.splice(index,1);
     }
   $scope.changeQuantity= function(id,quantity){
       simpleCart.changeQuantity(id,quantity);
   }
   
   $scope.clearAll = function(){
       $localStorage.$reset();
       $route.reload();
   }
   
        
});
  
    
}]);
