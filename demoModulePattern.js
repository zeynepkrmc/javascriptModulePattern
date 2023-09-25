//to make this module ready to use we need to assign it to a variable like below

var ProductController = (function(){

    var collections = [];

    //add products to collections
    const addProduct = function(product){
        collections.push(product); 
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index >= 0){
            collections.splice(index,1); //delete element starting from index by 1
        }
    }

    const getProducts = function(){
        return collections;
    }

    //public members, makes the methods public
    return  {
        addProduct,
        removeProduct,
        getProducts
    }
})();

//ProductController üzerinden public üyelere ulaşıp kullanma
ProductController.addProduct({name: 'Samsung', price: 50000 , type: 'phone'});
ProductController.addProduct({name: 'Huawei', price: 40000 , type: 'phone'});
ProductController.addProduct({name: 'Apple', price: 94000 , type: 'phone'});

console.log(ProductController.getProducts());