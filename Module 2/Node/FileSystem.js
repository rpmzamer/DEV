let fs=require("fs");
//console.log(fs);
let path=require("path");
let filename=path.join(__dirname,"file.txt");

//creating a file
fs.writeFileSync(filename,"Hello I am a text file !!")

//overwriting
fs.writeFileSync(filename,"The file is overwritten if the file already exists.");

//Reading
 console.log(fs.readFileSync(filename,"utf-8"));

 //Update
 fs.appendFileSync(filename," \nNewly added content");
 console.log(fs.readFileSync(filename,'utf-8'));

 //Delete
//  fs.unlinkSync(filename)   file.txt is USED FOR COPYING DIRECTORY;

 //Directory
 
 //Create
  //fs.mkdirSync("ourDirectory");
 //checks if the directory already exists
if(!fs.existsSync("ourDirectory"))
fs.mkdirSync("ourDirectory");

 //Reading a Directory 
let contentOfDir=fs.readdirSync(__dirname);
console.log(contentOfDir);

//Delete a Directory
fs.rmdirSync("ourDirectory");

// Copying a File
sourcePath=path.join(__dirname,"file.txt");
destinationPath=path.join(__dirname,"testModule","file.txt");

fs.copyFileSync(sourcePath,destinationPath); //my add-ons
if(fs.existsSync(destinationPath))
console.log("File Copied!!");

