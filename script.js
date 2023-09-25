// 1 - ) Global variable naming conflicts
//script.js
//var name = 'zey';
//app.js
//var name = 'su';
//console.log(name);

// 2 - )
//Encapsulation
//var Counter = {
    //number :0,

    //increment : function(){
    //return ++this.number;
    //},
    //decrement: function(){
      //  return --this.number;
    //}
//}
//console.log(Counter.increment());
//console.log(Counter.increment());
//Counter.number = 10;
//console.log(Counter.decrement());

//IIFE (Immadiately Invoked Function Expressions) 
//Live cycles of variables are special to functions
//(function(){
    //var name = 'Zey';
    //console.log(name);
//})();
//(function(){
    //var name = 'Su';
    //console.log(name);
//})();

var Module = (function(){

    // private members are here
    let number = 10;

    let payment = function() {
        return number*18/100;
    }
    // console.log(payment()); no error
    let decrement = function() {
        return --number;
    }
    return {
        // public members are here
        payment,
        decrement
    }
})();

//console.log(number); undefined error 
//console.log(payment()); undefined error
console.log(Module.payment());
console.log(Module.payment());
console.log(Module.decrement());
console.log(Module.decrement());