const { Module } = require("module");

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mult(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

//defining the module

module.exports = {
    addition:add,
    substraction:sub,
    multiply:mult,
    division:div
}