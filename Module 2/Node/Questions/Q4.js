// read content of unorganised folder and make  an array which has extension name of each file
let fs=require("fs");
let path=require("path");
let contentOfFolder=fs.readdirSync("Unorganised");
let arr=[];
for(let i=0;i<contentOfFolder.length;i++)
{
    arr.push(path.extname(contentOfFolder[i]));
}
console.log(arr);