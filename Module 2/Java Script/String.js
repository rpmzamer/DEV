let str="i am mayank";
console.info(str);

//length 
let len=str.length;
console.log(len);

//Sliced Method
let slicedarr=str.slice(2,5);
console.log(slicedarr);
 
//Replace method
let replacedstr=str.replace("am","was");
console.log(replacedstr);

//Uppercase
let upper=str.toUpperCase();
console.log(upper);

//Lowercase
let lower=str.toLowerCase();
console.log(lower);

//Concatinate
let first="Mayank"
let last=" Arya"
let fullname=first.concat(last);
console.log(fullname);

//Concate using +
console.log(first+last);

//Split
let splitted=str.split(" ");
console.log(splitted);