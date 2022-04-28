const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom;

const link = "https://github.com/topics";

request(link,cb);


function cb(error,response,html){
    if(error)
    {
        console.log(error);
    }
    else
    {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allAnchorTags = document.querySelectorAll(".no-underline.d-flex.flex-column.flex-justify-center");
        let textTags= document.querySelectorAll(".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1");
        for(let i=0;i<allAnchorTags.length;i++)
        {
            let CompleteLink="https://github.com"+allAnchorTags[i].href;
            parentfolderName = textTags[i].textContent;
        
            if(!fs.existsSync(parentfolderName))
                fs.mkdirSync(parentfolderName);
            // console.log(CompleteLink);
            request(CompleteLink,cb2);
        }
    }
}    

function cb2(error,response,html)
{
    if(error)
    {
        console.log("Error Found: ");
    }
    else
    {
        allGitRepoName = document.querySelectorAll(".f3.color-fg-muted.text-normal.lh-condensed");
        for(let i=0;i<8;i++)
        {
            console.log(allGitRepoName[i].textContent);
        }
    }
}