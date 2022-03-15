//move a file
let fs=require("fs");
let path=require("path");

let srcPath=path.join(__dirname,"..","file.txt");
fs.mkdirSync("Q5Move");
let dstPath=path.join(__dirname,"Q5Move","file.txt");

fs.copyFileSync(srcPath,dstPath);
fs.unlinkSync(srcPath);