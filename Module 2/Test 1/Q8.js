function spoon(str)
{
    let firstL=str.slice(0,1);
    splitWord=str.split(" ");
    let secondL=splitWord[1].slice(0,1);
    splitWord[0]=splitWord[0].replace(firstL,secondL);
    splitWord[1]=splitWord[1].replace(secondL,firstL);
    let spoonerism=splitWord[0]+" "+splitWord[1];
    return spoonerism;
}
console.log(spoon("kite flying"));
