// For Testing Purpose Only 
// window.alert("Hey, Be cautious");

// Task: Create a Todo List Application
const iptext = document.getElementById("iptext");
const addbutton = document.getElementById("ipbutton");
const container = document.getElementById("container");
const listcontainer = document.getElementById("todolist-container");


const todoinput = document.getElementById("iptext");

addbutton.addEventListener('click', () => {
    const val = iptext.value;
    console.log("Value Entered by the user is: ", val);
    iptext.value = "";

    // Until this point, we have the value entered by the user in the input box.
    // Now, we will be trying to save this value somehere okay

    const li = document.createElement("li");
    const cmark = document.createElement("button")
    cmark.innerText = "x"
    // Abhi tk li tag bn chuka h tera okay

    cmark.addEventListener('click', () => {
        listcontainer.removeChild(li);
    })

    li.innerText = val;
    li.appendChild(cmark);
    listcontainer.appendChild(li);
})


