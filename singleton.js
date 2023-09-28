//singleton pattern
//Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.
/*var singleton = (function(){

    var instance;
    
    //An object which is produced in different times, have the same referance. 
    //We observe this from randomNumber, when we call getInstance if loop runs here:
    //If there is an object created before, return the instance. If not create new instance.
    const createInstance =  function(){
        return {
            randomNumber : Math.random() //Randomly number will come as an object.
        }
    }

    return {
        getInstance : function(){
            if(!instance){
                instance = new createInstance();
            }
            return instance;
        }
    }

})();

const i1 = singleton.getInstance();
const i2 = singleton.getInstance();

console.log(i1.randomNumber,
    i2.randomNumber);
//output is 0.5371848672961654 0.5371848672961654
*/

var singleton = (function(){

    var instance;

    function ProductController(){
        const products = [
            {name: 'p1'},
            {name: 'p2'},
            {name: 'p3'}
        ];

        const add = function(product){
            products.push(product);
        }

        const get = function() {

            return products;
        }

        return {
            add, get
        }
    }

    return {
        getInstance : function(){
            if(!instance){
                instance = new ProductController();
            }
            return instance;
        }
    }

})();

const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();

productController1.add({name:'p4'});
console.log(productController2.get());
console.log(productController1.get());
//Only one instance is produced with singleton pattern.