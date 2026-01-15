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