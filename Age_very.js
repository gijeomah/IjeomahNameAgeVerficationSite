//creating 3 varables using the const keyword
const myText = document.getElementById("ageInput");
const mySubmit = document.getElementById("submitBtn");
const myResult = document.getElementById("textbox");
const myTest = document.getElementById("resultTxt")
let age;
mySubmit.onclick = function(){
    console.log("   ");
    age = myText.value;
    age = Number(age);
    if (age <= 5){
        myTest.textContent = "You are less than 5 years old!";
    }
    else if ( age < 18){
        myTest.textContent = "You are starting school now!";
    }
    else if (age == 18){
        myTest.textContent = "You are an  adult now ";
    }
      else if (age > 65){
        myTest.textContent = "You are a Senior Citizens";
    }
    else if (age >= 21){
        myTest.textContent = "You can drink!";
    }
    else{
       myTest.textContent = "Invalid input";
    }

}