"use strict";
//.................................Assignment 1: Building Your Friend List..................................//
Object.defineProperty(exports, "__esModule", { value: true });
//Define an object named people containing an empty array called friends.
let people = [];
//Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
let friend1 = {
    fName: "Waleed",
    lName: "Hassan",
    id: 123
};
let friend2 = {
    fName: "Sir Hamza",
    lName: "ALvi",
    id: 2233
};
//in this id is not inculded. It is optional and there will be no error if not used here
let friend3 = {
    fName: "Sir Ameen",
    lName: "Alam",
};
// Add these friend objects to the  people array with the help of push method
people.push(friend1, friend2, friend3);
// now print it
console.log(people);
//.............................................Assignment 2................................................//
//.............................Manipulating an Array: Rearranging Words.....................................
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like: const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
// Scrambled Array or Mixed array in unordered form
let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
//Extracting only strings from scrambled array with filter method
let stringArray = scrambledArray.filter(words => typeof words === "string"); //["student", "of", "am", "a", "GIAIC", "I"];
//Now removing "I" from the end of array and add in the beginning with pop and unshift
stringArray.unshift(stringArray.splice(5, 1)[0]); //removing "I" with with splice and adding "I" with unshift      // ["I", "student", "of", "am", "a", "GIAIC", ];
stringArray.splice(1, 0, stringArray.splice(3, 1)[0]); //reomoiving "am" from end and adding "am" after "I" 
//["I", "am", "student", "of",  "a", "GIAIC", ];
stringArray.splice(2, 0, stringArray.splice(4, 1)[0]); //now added "a" at index 2 after "am"
//["I", "am", "a", "student", "of", "GIAIC", ];
let finalSentence = stringArray.join(" "); //combining the whole Array into a single string with spaces by Join method. 
console.log(finalSentence); // I am a student of GIAIC
//.....................................Assignment 3..................................................
// .................................Company Product Catalog...........................................
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand how to manage product data.
//Inventory Array to store information later
let inventoryArray = [];
// seperate objects representing different products
let shirtsObj = {
    name: "Polo T-shirt",
    model: "efgh",
    cost: "25$",
    quantity: 50
};
let jeansObj = {
    name: "Jeans",
    model: "abc",
    cost: "10$",
    quantity: 75
};
let shoesObj = {
    name: "Shoes",
    model: "asdf",
    cost: "25$",
    quantity: 100
};
//now adding these objects to the inventory array with push method
inventoryArray.push(shirtsObj, jeansObj, shoesObj);
//Accessing shoesobj's "quantity" property from inventory array by using index and dot method
console.log(inventoryArray[2].quantity);
//creating  another obj 
let books = {
    name: "Harry Porter",
    model: "txtxtx",
    cost: "50$",
    quantity: 200
};
//now ading new obj to the invetory array by push method
inventoryArray.push(books);
// accessing 1 property of each product
console.log(inventoryArray[0].name);
console.log(inventoryArray[1].model);
console.log(inventoryArray[2].cost);
console.log(inventoryArray[3].quantity);
//console thw whole inventory array
console.log(inventoryArray);
//students array with following the Student interface information
let students = [
    { name: "Ameen Alam", isSenior: true, hasComletedAssignmnt: true },
    { name: "Hamza ALvi", isSenior: true, hasComletedAssignmnt: true },
    { name: "Waleed Hassan", isSenior: true, hasComletedAssignmnt: false },
    { name: "imran khan", isSenior: false, hasComletedAssignmnt: true }
];
//function that find students who are seniors and have completed their assignments.
function seniorStdWithAssignmnts(students) {
    return students.filter(std => std.isSenior && std.hasComletedAssignmnt);
}
;
let seniorStudentsWithAssgn = seniorStdWithAssignmnts(students);
console.log("Seniors Students  who and have completed their Assignments", seniorStudentsWithAssgn);
//function that removes students who haven't completed their assignments
function removeStdsWithoutAssignments(students) {
    return students.filter(std => !std.hasComletedAssignmnt && std.isSenior);
}
let stdsWithoutAssgns = removeStdsWithoutAssignments(students);
console.log("Students who have not completed their assignments", stdsWithoutAssgns);
// function removeStudentsWithoutAssignments(students: Student[]): Student[] {
//   // Find and log students who haven't completed their assignments
//   const studentsWithoutAssignments = students.filter(student => !student.hasCompletedAssignments);
//   console.log("Students who haven't completed their assignments:", studentsWithoutAssignments);
//   // Create a new array of students who have completed their assignments
//   return students.filter(student => student.hasCompletedAssignments);
// }
