//singleton pattern
var singleton = (function(){

    var instance;
    
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