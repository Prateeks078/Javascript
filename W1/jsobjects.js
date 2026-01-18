// Basically We do have 2 types of Data Structures in Java-Script 

// 1 Primitive -- Which are present in Javascript out of the box Pehle se hi okie -- ARRAYS & OBJECTS
// 2. Non- Primitive -- STACKS (Jo we can implement using Primitive Jaise Ki)

// Creation of a object 
const student={
    fname:"Prateek",
    lname:"Sharma",
    age:25,
    address:"Kamla Printing Press",
    hobbies:["Driving", "Swimming", "Running", "Hiking"],
    courses:{
        threecredit:["COA", "CC", "NS"],
        twocredit:["BTC", "NLP"]
    }
}

// Ofcoourse we can create an object inside an object 

console.log(student.courses.twocredit);

// -------- Garbage Collector Concept and Memory Leak ---------

// Basically we keep variable ka address in stack and actual data in heap right so if we have to clear toh so stack se hata rha h toh 
// usse heap se bhi hatana because a pointer will be there pointing to that data location so free it 

// Memory Leak ----  Look, if let us say, tune clear(x1234) kr diya means uss location pr se delete ho gaya heap se woh 
// Then basically agr koi pointer wha point kr rha h so it is pointing to a unknown lcoation means ki aisi jagah point kr rha h 
// Jaha cpu n koi toh random data assign kr diya hoga kuki m toh clear kr chuka tha whA se sb kuch 



// ------------ Copy by Reference and Value -----------------

let p1={
    name:"Prateek",
    id:345,
    favactor:"SRK",
    hobbies:{
        sport:"Cricket",
        series:"GOT"
    }
}

// let p2={
//     name:p1.name,
//     id:p1.id,
//     hobbies:p1.hobbies
// }

// Use of Spread Operator 

let p2={
    ...p1
}

p2.name="Ekta";
p2.hobbies.series="Taskari";

console.log(p1);
console.log(p2);

// Note:
// Concept of shallow copy constructor 
// Look, here if we see toh humne dekha ki anyhow if I am copying values of P2 in p1, I am able to see ki 
// it is happening as copy by value, but jaise hi object ke andr object aya it did as copy by reference that is /why 
// values dono jagah change ho gyi, agr object m array bhi aa jati toh bhi it would have been same behaviour 

// That is why it is copyin just upper upper se shallpowly and reffered to as shallow copy consturctor 

// Spread operator doesnt works with Inner Objects okay, it doesnt works for nested objects 


// ---------------Concept of Deep Copy -------------

// Non Primitive --> Primitve ---> Yeh to copy ho hi skte hai --> Again to Non Primitive 
// Object --> String --> Yeh to Copy hoskti hai directly --> Object 

let p1kastring = JSON.stringify(p1); // Serialisation
console.log(p1kastring);
let px=JSON.parse(p1kastring); // Deserialisation

// This concept is called as Deep Copy Technique n kuki we changed the address of both na so advantageous to us 

