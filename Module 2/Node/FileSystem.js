let fs=require("fs");
//console.log(fs);
let path=require("path");
let filename=path.join(__dirname,"file.txt");

//creating a file
fs.writeFileSync(filename,"Hello I am a text file !!")

//overwriting
fs.writeFileSync(filename,"The file is overwritten if the file already exists.");