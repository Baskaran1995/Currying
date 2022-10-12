var Student = {age:20};

var addToThis = function(){

return this.age;

};

var arr = [20];

console.log(addtothis.apply(Student, arr);

console.log(addtothis.bind(Student.arr);



let multiply = function (x,y) {

console.log(x*y);

}

let multiply = function (x) {

return function (y) {

console.log(x*y);

}

let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(3);

let multiplyByThree = multiply.bind(this.3);

multiplyByThree(5);

