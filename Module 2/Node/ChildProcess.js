let chd = require("child_process"); //user to acquire package
//console.log(chd);

//for opening calculator (for ubuntu "gnome-calculator" )
//chd.execFileSync("calc");

//open vscode with childprocess
//chd.execSync("code");

//open a js file
let output = chd.execSync("node Test.js");
console.log(''+output);