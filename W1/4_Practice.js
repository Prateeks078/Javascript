
// Practice Set 1 -------------------------------------------------------------------------


// Creation of an array containing different types of teas 
const teas=["green tea", "Black tea", "White tea", "Oolong tea", "Herbal tea", "xyz tea"];
console.log(teas);

// Add abc tea to the existing list of teas 
teas.push("abc tea");
console.log(teas);

// Remove xyz tea from the list of teas 
let index=teas.indexOf("xyz tea");
teas.splice(index,1);
console.log(teas);

// Filter the list to only include the teas that are caffeinated

// Only Herbal tea is the one which is non caffeinated 
const caffinated_teas=teas.filter((superman)=>superman!=="Herbal tea");
console.log(caffinated_teas);

// Sort the list of teas in an alphabetical order 
teas.sort();

// Use a for loop to print in the each type of tea in an array
for (let ind=0;ind<teas.length;ind++){
    console.log(teas[ind]);
}

// Use a for loop to count that how many teas were being caffeinated 
let count=0;
for(let ind=0;ind<teas.length;ind++){
    if(teas[ind]!=="Herbal tea"){
        count++;
    }
}
console.log(`the count is ${count}`)

// Use a for loop to create a new array with all the names of teas in Uppercase array 
let ucase=[];
for(let i=0;i<teas.length;i++){
    ucase.push(teas[i].toUpperCase());
}
console.log(ucase);

// Use a for loop to find the tea name with most of the characters 
let maxteaname="";
let maxi=0;
for(let i=0;i<teas.length;i++){
    if(teas[i].length>maxi){
        maxi=teas[i].length;
        maxteaname=teas[i];
    }
}

console.log(`the tea with maximum characters is ${maxteaname}`);


// Use a for loop to reverse the order of teas in an array 
for(let i=teas.length-1;i>=0;i--){
    console.log(teas[i]);
}   

// Try to learn about the difference between slice and splice methods in JS 


// Practice Set 2 -----------------------------------------------------------------------

// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.

const chai={
    name:"Masala Chai",
    type:"Black Tea",
    caffeine_level:"High"
}


// Problem: Access and print the name and type properties of the tea object.
console.log(`The name and type properties of tea are ${chai.name} and ${chai.type}`);


//Problem: Add a new property origin to the tea object.
chai.origin="India";
console.log(chai);


//Problem: Change the caffeine level of the tea object to "Medium".
chai.caffeine_level="Medium";
console.log(chai.caffeine_level);

//Problem: Remove the type property from the tea object.
delete chai.type;
console.log(chai);

//Problem: Check if the tea object has a property origin.
console.log(chai.hasOwnProperty("origin"));  // First Method to check
console.log("origin" in chai);               // Second Method to check

//Problem: Use a for...in loop to print all properties of the tea object.
for(let x in chai){
    console.log(chai[x]);
}

// Problem: Create some nested objects to represent different types of teas and their details.
const teacollection={
    firstcollection:{
        name:"Green Tea",
        type:"Green",
    },
    secondcollection:{
        name:"Black Tea",
        type:"Black"
    }
}

console.log(teacollection);

// Problem: Create a copy of the tea Object 

const chaicopy= {...chai}; // By Using Spread Operator, it is a shallow copy 
chaicopy.name="Ginger Tea"; // Modifying the name property of chaicopy
console.log(chaicopy);
console.log(chai); // Original Object remains unchanged

const chaicopy2=chaicopy; // Just Referencing, Not Creating a New Copy
console.log(chaicopy2.name);


// Deep Copy Example:

const deepchai={...teacollection}; // Shallow Copy of teacollection kuki nested objects hain
deepchai.firstcollection.name="Herbal Tea"; // Modifying the name property of deepchai
console.log(deepchai);
console.log(teacollection); // Original Object remains unchanged

// This is the problem of shallow copy where nested objects are still referenced.


// Solution to this 

