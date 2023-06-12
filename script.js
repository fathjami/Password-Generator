const generatePass = document.getElementById('generate');
const passdiv = document.querySelector('.passwords');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');


//costumize your password
const length = document.getElementById('length');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const number = document.getElementById('numbers');
const symbol = document.getElementById('symbols');

const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"];
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
const defaultArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","a","b","c","d","e","f","g","h","i","j","k","l","m","n","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

let pass = ""
let defaultLength = 10;
let characters = [];

// Theme
const theme = document.querySelector('.theme');

// Dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    document.body.classList.add('dark');
    theme.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    // light mode
    document.body.classList.remove('dark');
    theme.innerHTML = '<i class="fas fa-moon"></i>';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {

    if (event.matches) {
        document.body.classList.add('dark');
        theme.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.remove('dark');
        theme.innerHTML = '<i class="fas fa-moon"></i>';
    }

});

const generateX = () => {
    // Get the length from the input box
    if (length.value !== "" && length.value > 0){
        defaultLength = length.value;
        console.log(defaultLength);
    }

    // Add characters to the characters array if the box is checked
    if (upper.checked){
        characters.push(...uppercase);
    }
    if (lower.checked){
        characters.push(...lowerCase);
    }
    if (number.checked){
        characters.push(...numbers);
    }
    if (symbol.checked){
        characters.push(...symbols);
    }

    // If no boxes are checked, use the default array
    if (characters.length === 0){
        characters.push(...defaultArray);
    }
}


const generatePassword = () => {
    generateX();
    let random ;
    pass = "";
    for (let i = 0; i < defaultLength; i++){
        random = Math.floor(Math.random() * characters.length);
        pass += characters[random];
    }
    characters = [];
    return pass;
}

generatePass.addEventListener('click', function (){
    passdiv.classList.remove('hide');
    pass1.textContent = generatePassword();
    pass2.textContent = generatePassword();
} );




theme.addEventListener('click', function(e){
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')){
        e.target.classList.remove('fa-moon');
        e.target.classList.add('fa-sun');
    } else {
        e.target.classList.remove('fa-sun');
        e.target.classList.add('fa-moon');
    }
})


pass1.addEventListener('click', function (){
    let text = pass1.textContent;
    navigator.clipboard.writeText(text);
    pass1.textContent = "Copied!";

    setTimeout(function (){
        pass1.textContent = text;
    }
    , SECOND );
});

pass2.addEventListener('click', function (){
    let text = pass2.textContent;
    navigator.clipboard.writeText(text);

    pass2.textContent = "Copied!";

    setTimeout(function (){
        pass2.textContent = text;
    }
    , SECOND );
});