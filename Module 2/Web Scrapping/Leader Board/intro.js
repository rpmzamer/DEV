const request =require("request")

request("https://www.google.com/",function(error,response,body){
if(error)
console.log("error: ",error);          //print the error if one occurs 
else
console.log("body: ",body);           //print the html of google.com

});
