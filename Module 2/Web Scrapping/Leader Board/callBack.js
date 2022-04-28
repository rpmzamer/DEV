const fs=require("fs");
console.log("Before");
 
fs.readFile("file.txt",cb);
function cb(error,data)
{
    if(error)
    console.log("Error: ",error);
    else
    console.log("Data: ",data+" ");
}
console.log("After");
