

// Document Object Model (DoM) 

// console.log(window); // Will throw error in Node.js environment
// console.log(document); // Will throw error in Node.js environment

// console.log(window);
// document.write(`Hello from Js`); // Will throw error in Node.js environment


// ------------------------------------ Task --------------------------------------------

// T-1: On Click, krte hi user ke should do color black 

// Method 1 
function changecolortoblack(){
    document.body.style.backgroundColor="Pink";
}

function changecolortoblack(){
    document.body.style.backgroundColor="Black";
}

// But dry Principle violated 

// Hence do this 
function changecolor(color){
    document.body.style.backgroundColor=color;
}

// Event Listener Concept 
// Jab bhi mjhe ek button se bht jyada function krwane hai so I want everyone to listen to him 

// Task 2 
// Add Event Listener to Testing Event Listener button 

const darkmode=document.getElementById("darkmodeon")
darkmode.addEventListener('click', function(){
    console.log("I got clicked");
    changecolor("blue")
})

darkmode.addEventListener('click', function(){
    console.log("Storing the dark mode preference into the database");
})


// Task 3: Make a toggelable Button for dark and light mode 

// ('click', ()=>{

// })
const tog=document.getElementById("togglemode");
tog.addEventListener('click', function(){
    console.log("Toggling Is Enabled !!");
    
    const currentcolor=document.body.style.backgroundColor;

    if(!currentcolor||currentcolor=="white"){
        changecolor("black");
    } else {
        changecolor("white");
    }
})