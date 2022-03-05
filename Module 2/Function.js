//function without parameter
function saysHello()
{
    console.log("Hello Coder");
}
saysHello();

//function with parameter and return
function multiply(num1,num2)
{
    return num1*num2;
}
let ans=multiply(2,10);
console.info(ans);
//storing function as variable

let a = function sub (num1,num2)
{
    return num1-num2;
}
console.log(a(10,8));
 
//IIFE

(function (){
    console.log('Hello for IIFE')
});

//IIFE with parameter
(function (num1,num2)
{
    console.log(num1/num2);
})(10,2);

