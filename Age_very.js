//creating 3 varables using the const keyword
const myText = document.getElementById("ageInput");
const mySubmit = document.getElementById("submitBtn");
const myResult = document.getElementById("resultText");
let age;
mySubmit.onclick = function(){
    age = myText.ariaValueMax;
    age = Number(age);
    if (age < 5){
        myResult.textContent = "Your less than 5 years old!";
    }
    else if ( age < 13){
        myResult.textContent
    }

};