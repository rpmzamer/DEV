//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs=require("fs");
let path=require("path");
if(!fs.existsSync("TestQ1"))
fs.mkdirSync("TestQ1");
let filepath=path.join(__dirname,"TestQ1","TestQ1.txt");
fs.writeFileSync(filepath,"New file has been made");

