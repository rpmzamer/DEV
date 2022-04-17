const request = require("request");
const jsdom=require("jsdom");
const {JSDOM}=jsdom;
const link="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderboard=[]
request(link,cb);
function cb(error,response,html)
{
    if(error)
    console.log("Error Found!: ",error);
    else
    {
        const dom=new JSDOM(html);
        let allScoreCards=dom.window.document.querySelectorAll("a[data-hover='Scorecard']");
        for(i=0;i<allScoreCards.length;i++)
        {
            let links=allScoreCards[i].href;
            let completeLink="https://www.espncricinfo.com"+links;
            request(completeLink,cb2);
        }
    }
}       
function cb2(error,response,html)
{
    const dom=new JSDOM(html);
    batsmanRow=dom.window.document.querySelectorAll(".table.batsman tbody tr");
    for(let i=0;i<batsmanRow.length;i++)
    {
        let batsManColumn=batsmanRow[i].querySelectorAll("td");
        if(batsManColumn.length==8)
        {
        let name = batsManColumn[0].textContent;
        let runs = batsManColumn[2].textContent;
        let balls = batsManColumn[3].textContent;
        let fours = batsManColumn[5].textContent;
        let sixes = batsManColumn[6].textContent;
        console.log("Name : ",name,"Runs : ",runs,"Balls : ",balls,"Fours : ",fours,"Sixes : ",sixes); 
        processPlayer(name,runs,balls,fours,sixes);
        }
    }
} 
function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs+=runs;
            playerObj.Innings+=1;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return
        }
    }
}    