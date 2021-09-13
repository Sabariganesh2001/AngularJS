//**  Prototypal inheritance
// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("walking!");
//   }
// };
//
// var child = Object.create(parent);
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child);
//
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
// console.log("CHILD - child.value: ", child.value);  // Value will come from the child object because the 'value' propery of paarent property is masked by child property 
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue); //Since object is mutable and it only refers the address change in child's property change in the prototype itself so the "obj.objValue" is updated in prototype and it's property is refered by it's child object.
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
//console.log("child: ", child);   //This will refer the special type of property called "__proto__: which have reference to the parent object.
//
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

//** Function constructors
// See my other course: HTML, CSS, and Javascript for Web Developers
// Lecture #48
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
  return this;  //If we don't call this constructor function by new keyword then this will not return automatically so we have to give it manually(TO test by callingi the constructor function without new keyword)
}

// var myDog = new Dog("Max"); 
// console.log("myDog: ", myDog); 

// Not being used as a function constructor
var myDog2 = Dog("Max2"); //here this refer to window object
console.log(myDog2.name); // It is from window object  
