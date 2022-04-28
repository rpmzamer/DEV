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
        let batsman =dom.window.document.querySelectorAll(".batsman-cell.text-truncate a");
        for(let i=0;i<batsman.length;i++)
        {
            let link2=batsman[i].href;
            batsmanLink="https://www.espncricinfo.com"+link2;
            request(batsmanLink,cb2)
        }
    }
}
function cb2(error,response,html)
        {
            if(error)
            console.log("Error Found!: ",error);
            else
            {
                const dom=new JSDOM(html);
                let batsman =dom.window.document.querySelectorAll(".player-card-padding .player_overview-grid h5");
                console.log("Batsman Full Name: "+batsman[0].textContent);
                console.log("Born: "+batsman[1].textContent);
                console.log();
            }         
        }
