// let and const are the two datatypes used in Javascript 

let name = "Prateek Sharma ";
let age=90;

let skills=["Hiking", "coding"];

let favtown= null; //This gives us the datatype as object 
let hometown; //This gives us the datatype as undefined 

let studentprofile={
    name:"Prateek",
    age: 19,
    favgame:"Racing",
    favactor:"SRK"
};


console.log(skills);
console.log(studentprofile);


// Tells us the type of the datatypes used above  
console.log(typeof(skills));
console.log(typeof(favtown));
console.log(typeof(hometown));
console.log(typeof(studentprofile));

// Non Primitive types are 2 -- arrays and objects and others are all Primitive 


// ------------------------->>>>-------------------------

// Introducing Arrays 

let fruits=["Apple","Banana","Kiwi"];
let vegetables=new Array("Cucumber", "Cabbage");

console.log(fruits);
console.log(vegetables);

console.log(typeof(vegetables));
console.log(typeof(fruits));


console.log(fruits.length);
fruits[0]="Blueberry";

console.log(fruits);

// --------------------------->>>>--------------------------

// Looping 

let teas=["Masala", "Lemon", "Darjeeling"];

for(let i=0;i<teas.length;i++){
    console.log(`The tea at index ${i} is ${teas[i]}`)
}

