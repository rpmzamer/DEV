let users = [ { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, { name: "Bhavesh", age: 37, address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, { name: "Jasbir", age: 38, address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [ { id: 1, name: "Chair" }, { id: 2, name: "PS5" }, ], }, ];

function updateUsers(users, userObject, item) 
{
    for(let i=0;i<users.length;i++)
    {
        if(userObject.name==users[i].name)
        {
            for(int j=0;j<;userObject.order.length;j++)
            {
                for(int k=0;k<users[i].orders.length,k++)
                {
                if(userObject.order[j].name!=users[i].orders[j].name)
                {
                    users[i].orders.push(userObject.orders)
                }
            }
            }
        }
        else
        {
            users.push(userObject);
        }
    }
    return users;
}