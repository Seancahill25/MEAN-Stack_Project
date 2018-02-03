var fs = require("fs");

var onFileLoad = function(err, file) {
    console.log("got the file");
};

console.log("going to get a file");
fs.readFile("readFileSync.js", onFileLoad);

console.log("app continuess...");