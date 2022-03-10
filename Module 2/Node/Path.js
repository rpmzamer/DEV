//D:\FJP 6 Dev\Module 2\Node\Path.js

let path=require("path");
console.log(path);

//for finding the format of the file
console.log(path.extname("D:\FJP 6 Dev\Module 2\Node\Path.js"));

//for finding the base name
console.log(path.basename("D:\FJP 6 Dev\Module 1\index_day2.html"));

console.log(__dirname);
console.log(__filename);

//join
console.log(path.join(__dirname,"Text.js"));