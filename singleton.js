//singleton pattern
//Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.
var singleton = (function(){

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