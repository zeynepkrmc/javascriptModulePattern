//A function which will create object.
//Birbirine benzer objeleri üretecek yapı.

function Factory(){

    this.createEmployee = function(type){

        var employee;
        if(type === 'fulltime'){
            employee = new FullTime();
        }else if(type === 'parttime'){
            employee = new PartTime();
        }else if(type === 'temporary'){
            employee = new Temporary();
        }
        employee.type = type;
        employee.say = function(){
            console.log(this.type + ' : price by hour : ' + this.hourly);
        }
        return employee;
    }
}

var FullTime = function(){
    this.hourly = '30TL';
}
var PartTime = function(){
    this.hourly = '20TL';
}
var Temporary = function(){
    this.hourly = '15TL';
}

var Factory = new Factory();


var emps = [];
emps.push(Factory.createEmployee('fulltime'));
emps.push(Factory.createEmployee('fulltime'));
emps.push(Factory.createEmployee('parttime'));
emps.push(Factory.createEmployee('parttime'));
emps.push(Factory.createEmployee('temporary'));
emps.push(Factory.createEmployee('temporary'));

emps.forEach(function(emp){
    emp.say();
})



/*var fulltimeEmp = Factory.createEmployee('fulltime');
fulltimeEmp.say();

var parttimeEmp = Factory.createEmployee('parttime');
parttimeEmp.say();*/