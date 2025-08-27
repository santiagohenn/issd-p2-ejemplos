/**
 * JavaScript Fundamentals
 */

// Variables
let number = 10;
const name = "Santiago";
var isActive = true;

// Functions
function greet(user) {
    return `Hola, ${user}!`;
}

// Lambdas -> Arrow function
const square = x => x * x;

// Logica y condicionales
if (number > 5 && isActive) {
    console.log(greet(name));
} else {
    console.log("Inactive or number too small.");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(`For loop iteration: ${i}`);
}

let count = 0;
while (count < 3) {
    console.log(`While loop count: ${count}`);
    count++;
}

// Exceptions
try {
    let result = square("not a number"); // NaN
    if (isNaN(result)) {
        throw new Error("Invalid input for square function");
    }
    console.log(result);
} catch (error) {
    console.error("Caught exception:", error.message);
}

// Arrays e iteración
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => {
    console.log(`Fruit: ${fruit}`);
});

// Objetos y métodos
const person = {
    name: "Bob",
    age: 25,
    greet: function() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person.greet();