const products = [
    {name: 'Samsung', price: 50000 , type: 'phone'},
    {name: 'Huawei', price: 40000 , type: 'phone'},
    {name: 'Apple', price: 94000 , type: 'phone'}
];//product controller gets the products from databse e.g.

//to make this module ready to use we need to assign it to a variable like below

var ProductController = (function(data){

    var collections = data || []; //if it is not null data = collections vice versa is collection is created as an empty array.

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
})(products);//products are sent as parameters here.



//ProductController üzerinden public üyelere ulaşıp kullanma
ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);

console.log(ProductController.getProducts());

//Module extending without changing main module
var extended = (function(m){
    m.succesfullShopping = function(){
        console.log('shopping is approved');
    }
    //return extended module
    return m;

})(ProductController || {}); //we want to extend product controller, sent empty parameter

extended.succesfullShopping();
console.log(extended.getProducts());