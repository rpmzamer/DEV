//empty object decleration
let obj={}
console.log(obj);

//with value
let objMayank={
    "Name":"Mayank",
    "Age":22,
    "Phone No":9354796696,
    lastName:"Arya"
}
console.log(objMayank);

//using array,object ,function as value
let capAmerica={
    Name:"Steve",
    Age:9999,
    Friends:["Natasha","Tony","Thor"],
    Address:{
        City:"Queens",
        Country:"USA"
    },
    sayHi: function(){
        console.log("Hi this is Captain America!")
    }
}
console.log(capAmerica);

//Accessing object

console.log(capAmerica.Name);
//access array
console.log(capAmerica.Friends);
//accsessing array element
console.log(capAmerica.Friends[0]);
//accessing the object
console.log(capAmerica.Address);
//accessing the objects particular value
console.log(capAmerica.Address.City);
//accessing the funciton
capAmerica.sayHi();
//2nd Method to access a key
console.log("Second method for accessing: "+capAmerica["Name"]);

//Adding new key to the object
capAmerica.Movies=["Avengers","Civil War"]
//For changing values
capAmerica.Address.Country="UK";
console.log(capAmerica);
//Deletion
delete capAmerica.Movies;
console.log(capAmerica);
