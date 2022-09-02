let num1 = parseInt(prompt("Please select your first number", "Enter number"));
let num2 = parseInt(prompt("Please select your second number", "Enter number"));

// let int1 = parseInt(num1);
// let int2 = parseInt(num2);

if (num1 != null && num2 != null) {
    document.getElementById("inputSum").innerHTML =
    "You entered "+ num1 + " and " + num2 + " which equals " + (num1 + num2);
}