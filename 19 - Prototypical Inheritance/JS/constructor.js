function Alien(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    return this; // By default it will return the this so not need to enter any return statement.
    // return 7;  // If we return anything other than the 'this' or the constructor then it will omit the return as itself return the 'this' by default.
    // return Alien; //If we return the function itself it will return the constructor function and not will return our expected object.
} 
class Aliennn{ //From ES6 class like syntax is introduced to feel like sugar coated object-orient like language.
    constructor(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex; 
        this.intro = function(){
            return `Hi, Greetings from ${this.name}` 
        }
    }
}
let alien1 = new Alien('Sabari',20,'Male');
let alien2 = new Aliennn('SriRam',19,'Male'); 
// console.log(alien2,alien1);  
// console.log(alien2.intro());   
// console.log(alien1);

// //PROTOTYPE INHERITANCE FROM PROGRAMIZ SITE (https://www.programiz.com/javascript/prototype)

//     //In JavaScript, a prototype can be used to add properties and methods to a constructor function. And objects inherit properties and methods from a prototype. For example,

//         //1) Add property to a constructor function using Prototype.
//                 function Person () {
//                     this.name = 'John',
//                     this.age = 23
//                 }

//                 // creating objects
//                 const person1 = new Person();
//                 const person2 = new Person();

//                 // adding property to constructor function
//                 Person.prototype.gender = 'male';

//                 // prototype value of Person
//                 console.log(Person.prototype);

//                 // inheriting the property from prototype
//                 console.log(person1.gender);  // -> male
//                 console.log(person2.gender);  // -> male
        
//         //2) Add Methods to a Constructor Function Using Prototype
//             function Person (name,age) {
//                 this.name = name,
//                 this.age = age
//             }

//             // creating objects
//             const person1 = new Person("Sabari",20);
//             const person2 = new Person("Sriram",19); 

//             // adding a method to the constructor function
//             Person.prototype.greet = function() {
//                 console.log('hello' + ' ' +  this.name);
//             }

//             person1.greet(); // -> hello Sabari.
//             person2.greet(); // -> hello Sriram.

//         //3) Changing Prototype   
//             // If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value. For example,
//                 function Person() {
//                     this.name = 'John'
//                 }

//                 // add a property
//                 Person.prototype.age = 20;

//                 // creating an object
//                 const person1 = new Person();

//                 console.log(person1.age); // 20

//                 // changing the property value of prototype
//                 Person.prototype = { age: 50 }

//                 // creating new object
//                 const person3 = new Person();

//                 console.log(person3.age); // 50
//                 console.log(person1.age); // 20

//         //4) JavaScript Prototype Chaining
//             // If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function. For example,      

//                 function Person() {
//                     this.name = 'John'
//                 }
                
//                 // adding property 
//                 Person.prototype.name = 'Peter';
//                 Person.prototype.age = 23
                
//                 const person1 = new Person();
                
//                 console.log(person1.name); // John
//                 console.log(person1.age); // 23

//         //5) Accessing the prototype property of a constructor function from an object.

//                 function Person () {
//                     this.name = 'John'
//                 }
                
//                 // adding a prototype
//                 Person.prototype.age = 24;
                
//                 // creating object
//                 const person = new Person();
                
//                 // accessing prototype property
//                 console.log(person.__proto__);   // { age: 24 }

//         // Note: __proto__ is depricated 1) As it also used to assign the prototype of parent object or constructor function from the the child object, So, Instead of this from ES6 they introduced " Object.getPrototypeOf(childObject) " as it is only read only. 2) Also as they not handle the unlikely case of a name conflict:
//             //1)     
//                 var parentObject = {"parentKey" : "parentValue"};
//                 var childObject = {"childKey" : "childValue"};
//                 childObject.__proto__ = parentObject;
//                 console.log(childObject.parentKey); // parentValue
//                 Object.getPrototypeOf(childObject) = {"parentKey" : "newValue"};
//                 // ReferenceError: Invalid left-hand side in assignment

//             //2)
//                 var myObject = { __proto__ : "conflicts", getPrototypeOf : function () {return "does not conflict"} };
//                 console.log( myObject.getPrototypeOf() ); // "does not conflict"
//                 // all objects inherit from Object.prototype, not Object, so there is no conflict
//                 console.log( Object.getPrototypeOf(myObject) ) // Object {}
//                 console.log( myObject.__proto__ ); // Object {}, the value "conflicts" is lost 
            



        
        
                


                