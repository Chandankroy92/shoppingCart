app.factory('simpleCart', ['$cookieStore', '$localStorage', '$http', function(cookies, $localStorage, $http){
        
        var simpleCart = {
            itemCookie :'',
            init: function() {
                if($localStorage.cart == undefined) {
                    $localStorage.cart = [];
                }
            },
            
            getAll: function(){
                return cookies.get(this.itemCookie);
            },
            
            addItem: function(id,quantity) {
                var item = {
                    id: id,
                    quantity: quantity
                }
                $localStorage.cart.push(item);
                
            },
                        
            changeQuantity: function(id,quantity){
    
                var items=$localStorage.cart;
                angular.forEach(items,function(item){
                    if(item.id==id){
                        item.quantity=quantity;
                    }
                })
                
            },
                
            removeItem: function(index) {
                $localStorage.cart.splice(index,1);
                 
            },
            clear :function(){
                localStorage.clear();
            },
                
            price: {
                total: function(){
                     var total=0, items=cookies.get(this.itemCookie);
                    for(var i=0; i<items.length;i++){
                    total +=this.subTotal(items[i]);
                }
                return total;
                }
            }
        }
        return simpleCart;
    }]);