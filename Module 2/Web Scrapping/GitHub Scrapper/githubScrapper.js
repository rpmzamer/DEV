const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
const { JSDOM } = jsdom;

let issues=[];
const link = "https://github.com/topics";
let counter = 0 ;
let repoFolderPath ="";
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
        for(let i=0;i<allAnchorTags.length;i++)         //allAnchorTags.length
        {
            repoFolderPath ="";
            let CompleteLink="https://github.com"+allAnchorTags[i].href;
            let parentfolderName = textTags[i].textContent.trim();           // We used Trim() because the text had whitespaces
            // console.log(parentfolderName);
            if(!fs.existsSync(parentfolderName))
            {
                fs.mkdirSync(parentfolderName);
                repoFolderPath = path.join(__dirname,parentfolderName);
            }    
            // console.log(CompleteLink);
            request(CompleteLink,cb2);
            counter++;
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
             if(!fs.existsSync(singleRepoName))
             {
                fs.mkdirSync(singleRepoName);
                repoFolderPath = path.join(repoFolderPath,singleRepoName);
             }   
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
        let allIssuesTags = document.querySelectorAll(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        for(let i=0;i<8;i++)
        {
            let issName = allIssuesTags[i].textContent;
            let isslink = "https://github.com"+allIssuesTags[i].href;
            issuesProcess(issName,isslink);
        }  
        
        counter--;
        if(counter==0)
        {
            console.log(issues);
            let data = JSON.stringify(issues);                // because writeFileSync reads only string so for converting object to string we use JSON
            fs.writeFileSync(path.join(repoFolderPath,Issues.json),data);
        }
    }
}

function issuesProcess(issueName,issueLink)
{
    for(let i=0;i<issues.length;i++)
    {
        let issueObject = issues[i];
        if (issueObject.Name == issueName)
        {
            return;
        } 
    }

    let obj = {
        Name : issueName,
        Link : issueLink
    }
    issues.push(obj);
}