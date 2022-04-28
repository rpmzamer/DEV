const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
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
        for(let i=0;i<1;i++)         //allAnchorTags.length
        {
            let CompleteLink="https://github.com"+allAnchorTags[i].href;
            let parentfolderName = textTags[i].textContent.trim();           // We used Trim() because the text had whitespaces
            // console.log(parentfolderName);
            // if(!fs.existsSync(parentfolderName))
            // {
            //     fs.mkdirSync(parentfolderName);
            // }    
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
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allGitRepoName = document.querySelectorAll(".f3.color-fg-muted.text-normal.lh-condensed");
        for(let i=0;i<1;i++)
        {
            let s=allGitRepoName[i].textContent.split("/");    // since repoName was comming for e.g        wordplate  /       wordplate
            let singleRepoName=s[0].trim()+"/"+s[1].trim();    // We used Trim() because the text had whitespaces
            let completeRepoIssueLink = "https://github.com/"+singleRepoName+"/issues";
            // console.log(completeRepoIssueLink);
            request(completeRepoIssueLink,cb3);       
        }
    }
}

function cb3(error,response,html)
{
    if(error)
    {
        console.log("Error Found: ");
    }
    else
    {
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allIssuesTags = document.querySelectorAll(".d-block.d-md-none.position-absolute.top-0.bottom-0.left-0.right-0");
        for(let i=0;i<1;i++)
        {
            console.log(allIssuesTags[i].textContent); //to be resolved
            console.log("https://github.com"+allIssuesTags[i].href);
        }      
    }
}