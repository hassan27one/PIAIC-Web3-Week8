"use strict";
// Hassan Farooq  Web-3 PIAIC57456   NTU Faisalabad
//Week-08  Assignment-08    06-Sep-2023
console.log("Question-1 ================================================================");
// Question-1- Install Node.js, TypeScript and VS Code on your computer.
// Installed Node js from website and check from command prompt type cmd >> node -v version =20.4
// Installed Typescript from command prompt type in search = cmd >> npm install -g typescript then type tsc -v version =5.1.6
// Installed VSCode from website and click next and setup then finish from command prompt type cmd >> code -v version =1.8
console.log("Question-2 ================================================================");
// Question-2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var n1 = "Hassan Farooq";
console.log("“Hello Mr. ", n1, " Would you like to learn some Typescript today?");
console.log("Question-3 ================================================================");
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var n3u = "HASSAN FAROOQ";
console.log("Name toLowerCase = ", n3u.toLowerCase());
var n3L = "hassan farooq";
console.log("Name toUpperCase = ", n3L.toUpperCase());
var n3 = "hassan farooq";
// console.log("Name totitleCase = ", n3.totitleCase());
console.log("Question-4 ================================================================");
// Famous Quote: Find a quote from a famous person you admire. 
// Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var quotation = "A person who never made a mistake never tried anything new.";
var author = "Albert Einstein ";
console.log(author, " said, ", quotation);
console.log("Question-5 ================================================================");
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = " my message is you shoud try work for new things regardless of failure othervise you cannnot able to create something new";
console.log(famous_person, " said, ", message);
console.log("Question-6 ================================================================");
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let name6 = "Hassan";
console.log("Unmodified name =", name6);
console.log("Using slash t \t", name6);
console.log("Using slash n \n", name6);
// console.log("Using lstrip():", name6);
// console.log("\nUsing rstrip():", name6.rstrip());
// console.log("\nUsing strip():", name6.strip());
console.log("Question-7 ================================================================");
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
// Be sure to enclose your operations in print statements to see the results.
console.log("8 Result after Addition of Two Numbers 5+3 = ", 5 + 3);
console.log("8 Result after Subtraction of Two Numbers 10-2 = ", 10 - 2);
console.log("8 Result after Multiplication of Two Numbers 4*2 = ", 4 * 2);
console.log("8 Result after Division of Two Numbers 16/2= ", 16 / 2);
console.log("Question-8 ================================================================");
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("Four Lines which Output shoud be 8");
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
console.log("Question-9 ================================================================ \n");
// Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.
var n9 = 12;
var msg9 = "my Favorite Number is = ";
console.log(msg9 + n9);
console.log("Question-10 ================================================================ \n");
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// comment = 12 is my favourite number  stored in vaiable n10
var n10 = 12;
// comment = msg10 is a  variable for store  message
var msg10 = "My Favourite Number is = ";
console.log(msg10 + n10);
console.log("Question-11 ================================================================ \n");
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
var names = ["Ali", "Bilal", "Danish", "Ejaz", "Farooq"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log("Question-12 ================================================================ \n");
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.
console.log("It is very Glad to Meet you Mr.", names[0]);
console.log("It is very Glad to Meet you Mr.", names[1]);
console.log("It is very Glad to Meet you Mr.", names[2]);
console.log("It is very Glad to Meet you Mr.", names[3]);
console.log("It is very Glad to Meet you Mr.", names[4]);
console.log("Question-13 ================================================================ \n");
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// var Transport = ["DAIWOO","Bilal TRAVELS", "FAISAL MOVERS","SADAT TRAVELS","WARAICH EXPRESS"];
var ModeOfTransport = ["BIKE", "TAXI", "CAR", "BUS", "TRAIN"];
console.log(ModeOfTransport[0], "is best single ride Tranport in rush");
console.log(ModeOfTransport[1], "is best Tranport for inter City Travel");
console.log(ModeOfTransport[2], "is a Family Ride");
console.log(ModeOfTransport[3], "is a best Transport to travel between cities");
console.log(ModeOfTransport[4], "is a also a best Transport to travel between cities");
console.log("Question-14 ================================================================ \n");
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
var Guest = ["Ali", "Bilal", "Danish", "Ejaz", "Farooq"];
var invitation = " Please Come to Dinner";
console.log(Guest[0] + invitation);
console.log(Guest[1] + invitation);
console.log(Guest[2] + invitation);
console.log(Guest[3] + invitation);
console.log(Guest[4] + invitation);
console.log("Question-15 ================================================================ \n");
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
var Guest = ["Ali", "Bilal", "Danish", "Ejaz", "Farooq"];
var invitation = " Please Come to Dinner";
var Guest1 = Guest.splice(Guest.length - 1, 1);
console.log("name of the guest who can’t make it is = ", Guest1 + "\n");
// console.log("New List After delete Farooq = ", Guest);
var Guest2 = Guest.splice(4, 1, "Hassan");
console.log("Modified List after invite/Add New Person Hassan in List = ", Guest + "\n");
console.log(Guest[0] + invitation + "\n");
console.log(Guest[1] + invitation + "\n");
console.log(Guest[2] + invitation + "\n");
console.log(Guest[3] + invitation + "\n");
console.log(Guest[4] + invitation + "\n");
console.log("Question-16 ================================================================ \n");
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. 
// Use append() to add one new guest to the end of your list. 
// Print a new set of invitation messages, one for each person in your list.
var Guest = ["Ali", "Bilal", "Danish", "Ejaz", "Farooq"];
var invitation = " Please Come to Dinner";
var BigTableMsg = " New invitation = We have Found a Bigger Table for this dinner.";
var Guest1 = Guest.splice(0, 0, "Abid-New");
console.log("Added one new guest(Abid-New) to the beginning of your array = ", Guest, "\n");
var Guest2 = Guest.splice(3, 0, "Falak-New");
console.log("Added one new guest(Falak-New) to the Middle of your array = ", Guest, "\n");
var Guest3 = Guest.push("End-Guest");
console.log("Use append() to add one new guest(End-Guest) to the end of your list = ", Guest, "\n");
for (let i = 0; i < Guest.length; i++) {
    console.log("Mr. ", Guest[i] + BigTableMsg);
}
console.log("Question-17 ================================================================ \n");
console.log("Pending");
console.log("Question-18 ================================================================ \n");
// Seeing the World: Think of at least five places in the world you’d like to visit.
// Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var places = ["ClockTower", "BahriaTown", "Paris", "FaisalMosque", " EffilTower"];
console.log("Array in its original order = " + places + "\n");
console.log(places);
var places2 = places.sort();
console.log("Array in alphabetical order = " + places2 + "\n");
console.log("Array in still in orignal order = " + places + "\n");
var places3 = places.reverse();
console.log("Array in Reverse alphabetical order = " + places3 + "\n");
console.log("Array in still in orignal order = " + places + "\n");
var places3 = places.reverse();
console.log("Array in Reverse alphabetical order = " + places3 + "\n");
var places4 = places3.reverse();
console.log("Reverse alphabetical order again and back to orignal state = " + places4 + "\n");
var places5 = places4.sort();
console.log("Sort again in Alphabetical Order = " + places4 + "\n");
var places6 = places5.reverse();
console.log("Reverse Sort again the Array = " + places6 + "\n");
console.log("Question-19 ================================================================ \n");
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
// var Guest = ["Ali","Bilal", "Danish","Ejaz","Farooq"];
let Len = Guest.length;
console.log("we have invited " + Len + " numbers of People \n");
console.log("Question-20 ================================================================ \n");
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
var Cars = ["BMW", "TESLA", "TOYOTA", "HONDA", "SUZUKI"];
console.log("List of Array = " + Cars);
console.log("Question-21 ================================================================ \n");
// They think of something you could store in a TypeScript Object. 
// Write a program that creates Objects containing these items.
// var Cars = ["BMW", "TESLA", "TOYOTA", "HONDA","SUZUKI" ];
// console.log("Object of Car(Array) = " + Cars);
// type CarType= {Model:string, Brand:string, Year:number, color:string};
let Car = {
    "BMW": { Model: "city VXi",
        Brand: "Honda",
        Year: 2013,
        color: "white",
    },
    "TESLA": { Model: "Vids",
        Brand: "Suzuki",
        Year: 2018,
        color: "Black"
    },
    "TOYOTA": { Model: "Vids",
        Brand: "Suzuki",
        Year: 2018,
        color: "Black"
    },
    "HONDA": { Model: "Vids",
        Brand: "Suzuki",
        Year: 2018,
        color: "Black"
    },
    "SUZUKI": { Model: "Vids",
        Brand: "Suzuki",
        Year: 2018,
        color: "Black"
    }
};
// print all Objects 
console.log(Car);
// object 1 
// console.log(Car["BMW"]);
// object 1 + property Year
// console.log(Car["BMW"].Year);
console.log("Question-23 ================================================================ \n");
// Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
console.log("Question-24 ================================================================ \n");
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
// Tests using the lower case function
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
// Test whether an item is in a array
// Test whether an item is not in a array
console.log("Tests for equality and inequality with strings \n");
let str1 = "StringOne";
let str2 = "StringTwo";
console.log("equality = " + str1 == str2 + "\n");
console.log("inequality = " + str1 !== str2 + "\n");
console.log("Tests Equlity using the lower case function \n");
let str3 = "TO LOWER CASE";
let str4 = "to lower case";
console.log(str3.toLowerCase() === str4 + "\n");
let num1 = 7;
let num2 = 3;
console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log("Tests using and or operators \n");
let x = 5;
let y = 10;
let z = 15;
console.log(x < y && y < z);
console.log(x < y || y < z);
console.log(x > y && y < z);
console.log(x > y || y < z);
console.log("Test whether an item is in a array \n");
let fruits = ['apple', 'banaba', 'orange', 'grape'];
console.log(fruits.includes('orange'));
console.log(fruits.includes('kiwi'));
console.log("Test whether an item is not in a array \n");
console.log(!fruits.includes('orange'));
console.log(!fruits.includes('kiwi'));
console.log("Question-25 ================================================================ \n");
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
console.log("1st Version of Code \n");
if (alien_color === "green") {
    console.log("Player has Earned 5 Points  \n");
}
else {
    console.log(" Player Has Earned 10 points \n");
}
// New Version 
console.log("2nd Version of Code \n");
if (alien_color === "blue") {
    console.log("Player has Earned 5 Points  \n");
}
else {
    console.log(" Player Has Earned 10 points \n");
}
console.log("Question-26 ================================================================ \n");
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color = "green";
console.log("1st Version of Code \n");
if (alien_color === "green") {
    console.log("Player has Earned 5 Points for shooting Green Alien \n");
}
else if (alien_color !== "green") {
    console.log(" Player Has Earned 10 points for shooting Blue Alien \n");
}
else {
    console.log(" Unknown Color \n");
}
console.log("Question-27 ================================================================ \n");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// 1st Version -------------
console.log("1st Version of Code if shoot green Color \n");
var alien_color = "green";
if (alien_color === "green") {
    console.log("Player has Earned 5 Points for shooting Green Alien \n");
}
else if (alien_color === "yellow") {
    console.log(" Player Has Earned 10 points for shooting yellow Alien \n");
}
else if (alien_color === "red") {
    console.log(" Player Has Earned 15 points for shooting Red Alien \n");
}
else {
    console.log(" Unknown Color \n");
}
// 2st Version -------------
console.log("1st Version of Code if shoot yellow Color \n");
var alien_color = "yellow";
if (alien_color === "green") {
    console.log("Player has Earned 5 Points for shooting Green Alien \n");
}
else if (alien_color === "yellow") {
    console.log(" Player Has Earned 10 points for shooting yellow Alien \n");
}
else if (alien_color === "red") {
    console.log(" Player Has Earned 15 points for shooting Red Alien \n");
}
else {
    console.log(" Unknown Color \n");
}
// 3st Version -------------
console.log("3rd Version of Code if shoot Red Color \n");
var alien_color = "red";
if (alien_color === "green") {
    console.log("Player has Earned 5 Points for shooting Green Alien \n");
}
else if (alien_color === "yellow") {
    console.log(" Player Has Earned 10 points for shooting yellow Alien \n");
}
else if (alien_color === "red") {
    console.log(" Player Has Earned 15 points for shooting Red Alien \n");
}
else {
    console.log(" Unknown Color \n");
}
console.log("Question-28 ================================================================ \n");
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log("Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then: \n");
var age = 23;
if (age < 2) {
    console.log("Person is Baby \n");
}
else if (age = 2 || age < 4) {
    console.log("Person is Toddler \n");
}
else if (age = 4 || age < 13) {
    console.log("Person is Kid \n");
}
else if (age = 13 || age < 20) {
    console.log("Person is Teenager \n");
}
else if (age = 20 || age < 65) {
    console.log("Person is ADULT \n");
}
else if (age = 65 || age > 65) {
    console.log("Person is OLD \n");
}
else {
    console.log("Wrong Entry \n");
}
console.log("Question-29 ================================================================ \n");
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
console.log("Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array. \n");
var favorite_fruits = ['Apple', 'Banana', 'Orange'];
if (favorite_fruits.includes("Apple")) {
    console.log("Apples are very good for Health \n");
}
if (favorite_fruits.includes("Banana")) {
    console.log("Banaba is nice \n");
}
if (favorite_fruits.includes("Orange")) {
    console.log("Orange is Saur \n");
}
// Question-3 ==========================================================================
// Question-3 ==========================================================================
