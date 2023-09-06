// Hassan Farooq  Web-3 PIAIC57456   NTU Faisalabad
//Week-08  Assignment-08    06-Sep-2023

console.log("Question-1 ================================================================");
// Question-1- Install Node.js, TypeScript and VS Code on your computer.

// Installed Node js from website and check from command prompt type cmd >> node -v version =20.4
// Installed Typescript from command prompt type in search = cmd >> npm install -g typescript then type tsc -v version =5.1.6
// Installed VSCode from website and click next and setup then finish from command prompt type cmd >> code -v version =1.8


console.log("Question-2 ================================================================");
// Question-2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var n1:string = "Hassan Farooq" 
console.log("“Hello Mr. ", n1, " Would you like to learn some Typescript today?");

console.log("Question-3 ================================================================");
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var n3u:string = "HASSAN FAROOQ";
console.log("Name toLowerCase = ", n3u.toLowerCase());

var n3L:string = "hassan farooq";
console.log("Name toUpperCase = ",n3L.toUpperCase());

var n3:string = "hassan farooq";
// console.log("Name totitleCase = ", n3.totitleCase());

console.log("Question-4 ================================================================");

// Famous Quote: Find a quote from a famous person you admire. 
// Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

var quotation:string = "A person who never made a mistake never tried anything new."
var author:string = "Albert Einstein "

console.log(author, " said, ", quotation);


console.log("Question-5 ================================================================");
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.

var famous_person:string= "Albert Einstein"
var message:string= " my message is you shoud try work for new things regardless of failure othervise you cannnot able to create something new"
console.log(famous_person, " said, ", message);


console.log("Question-6 ================================================================");
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let name6:string = "Hassan";

console.log("Unmodified name =", name6);

console.log("Using slash t \t", name6);
console.log("Using slash n \n", name6);


// console.log("Using lstrip():", name6);

// console.log("\nUsing rstrip():", name6.rstrip());

// console.log("\nUsing strip():", name6.strip());


console.log("Question-7 ================================================================");
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. 
// Be sure to enclose your operations in print statements to see the results.

console.log("8 Result after Addition of Two Numbers 5+3 = ", 5+3)
console.log("8 Result after Subtraction of Two Numbers 10-2 = ", 10-2)
console.log("8 Result after Multiplication of Two Numbers 4*2 = ", 4*2)
console.log("8 Result after Division of Two Numbers 16/2= ", 16/2)


console.log("Question-8 ================================================================");
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log("Four Lines which Output shoud be 8")

console.log(5 + 3)
console.log(10 - 2)
console.log(4 * 2)
console.log(16 / 2)

console.log("Question-9 ================================================================");
// Favorite Number: Store your favorite number in a variable. 
// Then, using that variable, create a message that reveals your favorite number. Print that message.

var n9 = 12;
var msg9 = "my Favorite Number is = ";

console.log(msg9+n9)

console.log("Question-10 ================================================================");
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// comment = 12 is my favourite number  stored in vaiable n10
var n10 = 12;
// comment = msg10 is a  variable for store  message
var msg10 = "My Favourite Number is = ";

console.log(msg10+n10)


console.log("Question-11 ================================================================");
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.

var names = ["Ali","Bilal", "Danish","Ejaz","Farooq"];

console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])


console.log("Question-12 ================================================================");
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. 
// The text of each message should be the same, but each message should be personalized with the person’s name.

console.log("It is very Glad to Meet you Mr.",names[0])
console.log("It is very Glad to Meet you Mr.",names[1])
console.log("It is very Glad to Meet you Mr.",names[2])
console.log("It is very Glad to Meet you Mr.",names[3])
console.log("It is very Glad to Meet you Mr.",names[4])

console.log("Question-13 ================================================================");
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// var Transport = ["DAIWOO","Bilal TRAVELS", "FAISAL MOVERS","SADAT TRAVELS","WARAICH EXPRESS"];

var ModeOfTransport = ["BIKE","TAXI","CAR", "BUS","TRAIN"];

console.log(ModeOfTransport[0], "is best single ride Tranport in rush")
console.log(ModeOfTransport[1], "is best Tranport for inter City Travel")
console.log(ModeOfTransport[2], "is a Family Ride")
console.log(ModeOfTransport[3], "is a best Transport to travel between cities")
console.log(ModeOfTransport[4], "is a also a best Transport to travel between cities")




console.log("Question-14 ================================================================");
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

var Guest = ["Ali","Bilal", "Danish","Ejaz","Farooq"];
var invitation:string = " Please Come to Dinner";  

console.log(Guest[0] + invitation);
console.log(Guest[1] + invitation);
console.log(Guest[2] + invitation);
console.log(Guest[3] + invitation);
console.log(Guest[4] + invitation);

console.log("Question-15 ================================================================");
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

var Guest1 =  Guest.splice(Guest.length-1, 1);
console.log("New List After delete Farooq = ", Guest);

var Guest2 = Guest.splice(4, 1, "Hassan");
console.log("New List after invite/Add New Person Hassan in List = ", Guest);

// console.log("Question-16 ================================================================");


// console.log("Question-17 ================================================================");


// console.log("Question-18 ================================================================");


// console.log("Question-19 ================================================================");


// console.log("Question-20 ================================================================");



// Question-3 ==========================================================================

// Question-3 ==========================================================================