let numbers = [1,2,3];
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
let colors = ["red", "green", "blue"];
let extendedColors = ["yellow", ...colors, "purple"];
let person = {
    name: "John",
    age: 30
}
let newPerson = {...person};
let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let combinedObject = {...object1, ...object2};

// Sum function
function sum(x, y, z) {
    let total = 0;
    total = x + y + z;
    return total;
}

newPerson = {
    name: "Jane",
    age: 30,
    gender: "female"
}


console.log("Task 1: " + sum(...numbers));
console.log("Trask 2: " + mergedArray);
console.log("Trask 3: " + extendedColors);
console.log("Trask 4: Person 2 " + JSON.stringify(newPerson) + ", Person 1 " + JSON.stringify(person));
console.log("Trask 5: " + JSON.stringify(combinedObject));
