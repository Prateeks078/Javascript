// Methods && Functions 
// Function is basically a stand alone quantity but if that function is defined inside an object then 
// it is referred to us as a method 

// Suppose I have an object Person1 with some properties and I want to make another object Person2 with same properties 
// So I need to write the same code again and again for each object and there will be for sure chances of bugs 

// I can't use Deep copy because it is used to copy the values of one object to another object but here
//  I want to copy the structure of one object to another object or want to copy the keys na bro 

// So, Basically i can use classes 

const obj1={
    fname:"Prateek",
    lname:"Sharma",
    hobby:"Coding",

    getfullname:function(){
        return `The name is ${this.fname} ${this.lname} and the hobby is ${this.hobby}`;
    }
};

const obj2={
    fname:"John",
    lname:"Snow",
    hobby:"Watching TV Series"
};

console.log(obj1);
console.log(obj1.getfullname()); // It will give the full name of obj1

console.log(obj2);
//console.log(obj2.getfullname()); // It will be giving error 
console.log(obj2.getfullname) // It will give undefined because getfullname is not defined in obj2

// Important Interview Points to consider 

// --------------------------------------------------------
obj2.__proto__=obj1; // Now obj2 is inheriting from obj1
// obj1.__proto__=null; // Breaking the prototype chain further
// --------------------------------------------------------


// Prototype Inheritance Concept I learnt 

console.log("HI");
console.log(obj2.getfullname()); // It will give the full name of obj1
console.log(obj2.toString()); // It will be giving an error because we broke the chaining bro 


// Basically these 2 are having different addresses, ek m change krenge toh it wont affect the other
// ---------------------------------------------------------------------------------------------------------------

class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }

    getfullname(){
        return `${this.fname} ${this.lname}`;
    }
};

const p1=new Person("Prateek","Sharma");
const p2=new Person("John","Snow");

console.log(p1.getfullname());
console.log(p2.getfullname());


// If I am not creating any constructor then also it will be working because Js will be automatically creating
// a default constructor for us if we do not create a constructor that will be called as a default constructor 

// Parameterized Constructor -> A constructor which takes parameters is called parameterized constructor which we used above 

// --------------------------------------------------------------------------------------------------
// Why everything in Js is an Object ?  {Question of Great Minds}

const arr=[1,2,3,4,5];
// arr.__proto__ gives all the properties and methods of Array class because arr is inheriting from Array.prototype
// arr.__proto__.__proto__ gives all the properties and methods of Object class because Array.prototype is inheriting from Object.prototype

// Earth bani hogi kissi ek atom se right ? 
// Similarly Js me sab kuch object isliye hai kyunki sab kuch ek base object se bana hai
// Everything just came out from an Object Class 


console.log(Person.prototype)// It will give all the properties and methods of Person 
console.log(Person.prototype);
console.log(Person.prototype);
console.log(Person.prototype);
console.log(Person.prototype);
console.log(Person.prototype);


console.log("-----------------------------------");
console.log(p1.__proto__); // It will give all the properties and methods of Array class
console.log(p1.__proto__); // It will give all the properties and methods of Array clas
console.log(p1.__proto__); // It will give all the properties and methods of Array clas
console.log(p1.__proto__); // It will give all the properties and methods of Array clas
console.log(p1.__proto__); // It will give all the properties and methods of Array clas

console.log(p1.__proto__.getfullname); // It will give all the properties and methods of Array clas

// Bhai  sun, whenever i be creating an object of Person class, what u have to do is just copy the 
// properties of base class Person and just paste it into the object ka __proto__
// So that object can access all the properties and methods of Person class through prototype chain


// we didnt do __proto__ Kuki we do this with the objects not with the classes bro 
// Toh basically our new keyword is doing this job for us in the background only bro okkie and calling it as Syntactic Sugar 

class A{
    funcinsideA(){
        console.log("Function inside A");
    }
};

class B{
    funcinsideB(){
        console.log("Function inside B");
    }
};

const baccha1=new A(); // baccha is an object of class A
const baccha2=new B(); // baccha2 is an object of class B

baccha1.funcinsideA();
baccha2.funcinsideB();


// Let us say I want to use funcinsideA() methos inside class B 
// I can literally paste the code but I do not want to mitigate the DRY Prinicple bro 

// Method 1: Using __proto__ 
// CASE 1:
// bachha2.__proto__=baccha1; 
// baccha2.funcinsideA(); // This will not work

// Reason : 
// baccha2 ❌
// baccha1 ❌ (physically empty)
// A.prototype ✅ (but JS doesn't jump based on borrowing)

// CASE 2: 
baccha2.__proto__=A.prototype;
baccha2.funcinsideA(); // It will work now bro

// CASE 3:
// // B.prototype=A.prototype;
// baccha2.funcinsideA(); // It will NOT BE working

// REASON: 
// You did reference copy, not prototype linking.
// This means:
// B loses its own prototype
// Both classes now share the same prototype object
// This is aliasing, not inheritance.


// Alias Method to make it work 

class C extends B{
}

const baccha3=new C();
baccha3.funcinsideB(); // It will work

