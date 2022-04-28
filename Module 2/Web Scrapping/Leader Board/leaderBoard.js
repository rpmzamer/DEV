const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs")
let xlsx = require("json-as-xlsx")
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderboard = []      //Array of objects
let counter = 0;
request(link, cb);
function cb(error, response, html) {
    if (error)
        console.log("Error Found!: ", error);
    else {
        const dom = new JSDOM(html);
        let allScoreCardsTags = dom.window.document.querySelectorAll(".ds-border-b.ds-border-line");
        for (i = 0; i < 60; i++) {
            let anchorTagAll = allScoreCardsTags[i].querySelectorAll("a");
            let link = anchorTagAll[2].href;
            let completeLink = "https://www.espncricinfo.com" + link;
            request(completeLink, cb2);
            counter++;
        }
    }
}
function cb2(error, response, html) {
    if (error)
        console.log("Error Found!: ", error);
    else {
        const dom = new JSDOM(html);
        batsmanRow = dom.window.document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
        for (let i = 0; i < batsmanRow.length; i++) {
            let batsManColumn = batsmanRow[i].querySelectorAll("td");
            if (batsManColumn.length == 8) {
                let name = batsManColumn[0].textContent;
                let runs = batsManColumn[2].textContent;
                let balls = batsManColumn[3].textContent;
                let fours = batsManColumn[5].textContent;
                let sixes = batsManColumn[6].textContent;
                // console.log("Name : ",name,"Runs : ",runs,"Balls : ",balls,"Fours : ",fours,"Sixes : ",sixes); 
                processPlayer(name, runs, balls, fours, sixes);
            }
        }
        counter--;
        if (counter == 0) {
            console.log(leaderboard);
            let data = JSON.stringify(leaderboard);
            fs.writeFileSync('batsmanStats.json', data);
            let dataExcel = [
                {
                    sheet: "IPL Stats",
                    columns:
                        [
                            { label: "Name", value: "Name" }, // Top level data
                            { label: "Innings", value: "Innings" }, // Custom format
                            { label: "Runs", value: "Runs" }, // Run functions
                            { label: "Balls", value: "Balls" },
                            { label: "Fours", value: "Fours" },
                            { label: "Sixes", value: "Sixes" },
                        ],
                    content: leaderboard
                },
            ]
            let settings = {
                fileName: "BatsmanDetails", // Name of the resulting spreadsheet
                extraLength: 3, // A bigger number means that columns will be wider
                writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
            }

            xlsx(dataExcel, settings) // Will download the excel file
        }
    }
}

function processPlayer(name, runs, balls, fours, sixes) {
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for (let i = 0; i < leaderboard.length; i++) {
        let playerObj = leaderboard[i];
        if (playerObj.Name == name) {
            //will do some work here
            playerObj.Runs += runs;
            playerObj.Innings += 1;
            playerObj.Balls += balls;
            playerObj.Fours += fours;
            playerObj.Sixes += sixes;
            return;
        }
    }

    // code coming here means we did not find our player inside leaderboard

    let obj = {
        Name: name,
        Innings: 1,
        Runs: runs,
        Balls: balls,
        Fours: fours,
        Sixes: sixes
    }
    leaderboard.push(obj);
}
