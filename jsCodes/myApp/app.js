// console.log("Hello World");

//require built in "URL parser" module
var url = require("url");

const myUrlObject = url.parse("http://www.example.com/profile?name=barry");

console.log(myUrlObject.protocol);
console.log(myUrlObject.query);

//third party modules
var Mustache = require("mustache");
var result = Mustache.render("hello, {{firstName}} {{lastName}}! ", {
    firstName : "Sachin" ,
    lastName : "Thakan"
});

console.log(result);

//using locally defined module called "randomInteger.js"

var randominteger = require("./randomInteger");

console.log(typeof(randominteger));

console.log(randominteger());
console.log(randominteger());
console.log(randominteger());

//importing another local module

var bio = require('./bio');

console.log(bio.name);
console.log(bio.rollNumber);

