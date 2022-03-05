flag=0
let num=33
for(let i=2;i*i<=num;i++)
{
    if(num%i==0)
    {
        flag=1
        break
    }
}
if(flag==0)
{
    console.log("It is a prime number")

}
else
{
    console.log("It is not a prime number")
}