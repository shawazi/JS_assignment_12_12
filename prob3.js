let num1 = +prompt("Enter the first number: ");

let num2 = +prompt("Enter the second number: ");

let num3 = +prompt("Enter the third number: ");

if (num1 * num2 * num3 > 0) {
    console.log("+");
} else if (num1 * num2 * num3 < 0) {
    console.log("-");
} else {
    console.log("The number '0' is neither positive nor negative.")
}
