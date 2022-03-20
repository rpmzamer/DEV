function decToBin(dec)
{
    let power=1;
    let binary=0;
     while(dec!=0)
    {
        let rem=Math.floor(dec%2);
        dec=Math.floor(dec/2);
        binary=binary+rem*power;
        power=power*10;
    }
    return binary;
}
console.log(decToBin(3672));
