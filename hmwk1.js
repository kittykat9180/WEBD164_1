let num1 = prompt("Please select your first number", "Enter number");
let num2 = prompt("Please select your second number", "Enter number");

let int1 = parseInt(num1);
let int2 = parseInt(num2);

if (int1 != null && int2 != null) {
    document.getElementById("inputSum").innerHTML =
    "You entered "+ int1 + " and " + int2 + "which equals " + (int1 + int2);
}