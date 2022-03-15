//copy index.html file from module1 to a new folder inside module2 having name html.
let path = require("path");
let fs = require("fs");
if(!fs.existsSync("HTML"))
fs.mkdirSync("HTML");
let sourcePath=path.join(__dirname,"..","..","..","Module 1","Demo Site","index.html");
let destPath=path.join(__dirname,"HTML","index.html");
fs.copyFileSync(sourcePath,destPath);


