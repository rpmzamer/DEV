const request = require("request");
const jsdom=require("jsdom");
const {JSDOM}=jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);
function cb(error,response,html)
{
    if(error)
    console.log("Error Found!: ",error);
    else
    {
        const dom=new JSDOM(html);
        let bowlersTable=dom.window.document.querySelectorAll(".table.bowler");
        let highestWicket=0;
        let nameOfHighestWicketTaker="";
        for(let i=0;i<bowlersTable.length;i++)
        {
            let rows=bowlersTable[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++)
            {
                let tds = rows[j].querySelectorAll("td");
                
                if(tds.length>1)
                {
                    let name=tds[0].textContent;
                    let wicket=tds[4].textContent;
                    if(wicket>highestWicket)
                    {
                        highestWicket=wicket
                        nameOfHighestWicketTaker= name;
                    }
                }    
            }
        }
        console.log(nameOfHighestWicketTaker);
        console.log(highestWicket);
    }

}
