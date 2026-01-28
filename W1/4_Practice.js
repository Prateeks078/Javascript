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

