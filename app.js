//part one create a new feature branch to work on
//as you complete each of the following tasks commit the change with a clear logical commit message

//part two add app.js and style.css to index.html in the head section

//part three create a single event listener 
//that will log to console the text value of any div that is clicked on inside div .one
//for example clicking on three will log "three" to the console

const upload = document.querySelectorAll(".one").addEventListener("click", console.log(upload), false);

//part four write a function that takes a name argument and returns a paragraph element
//with the text "hello <name>" use template literals

function getName() {
    let name = window.prompt("Name: ");
    let result = `<p>hello ${name}</p>`;
    console.log(result)
}

//part five write a function that will get the text value from the text input

function getText() {
    window.prompt("Enter text to return its value: ");
    let textValue = document.querySelector().value; 
    return textValue
}

//part six write an event handler that will use the two functions created above to insert
//a new paragraph at the end of div .two when the button is clicked.

let ptwo = `<p>new para!</p>`
const updateTwo = document.querySelectorAll(".two");

function logAbove() {
    console.log (ptwo, getText(), getName())
}

updateTwo.onclick = logAbove;

//desired functionality a user could enter a name in the text field, 
//and when they click the button a new paragraph that reads "hello <name>" where name is the name
//they entered in the input field is created below the button