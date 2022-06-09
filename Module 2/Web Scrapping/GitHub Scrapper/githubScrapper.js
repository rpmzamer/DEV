const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
const { JSDOM } = jsdom;
let issues=[];
const link = "https://github.com/topics";
let topicpath = [];
let repoFolderPath = [];
let j=0;
let k=0;
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
            
            let CompleteLink="https://github.com"+allAnchorTags[i].href;
            let parentfolderName = textTags[i].textContent.trim();           // We used Trim() because the text had whitespaces
            if(!fs.existsSync(parentfolderName))
            {
                fs.mkdirSync(parentfolderName);
                topicpath[i] = path.join(__dirname,parentfolderName);
            }    
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
        let termcb2 = 8;
        if(allGitRepoName.length<8)
        termcb2=allGitRepoName.length;
        for(let i=0;i<termcb2;i++)
        {
            let s=allGitRepoName[i].textContent.split("/");    // since repoName was comming for e.g        wordplate  /       wordplate
            let singleRepoName = s[0].trim()+"/"+s[1].trim();    // We used Trim() because the text had whitespaces         
            let singleRepoNameCrop = s[0].trim();
            let completeRepoIssueLink = "https://github.com/"+singleRepoName+"/issues";
             let topicRepoPath= topicpath[j]+"\\" + singleRepoNameCrop;                                                                       
             if(!fs.existsSync(topicRepoPath))
             {
                fs.mkdirSync(topicRepoPath);
                repoFolderPath.push(topicRepoPath);
             }
             request(completeRepoIssueLink,cb3); 
                 
        }
        j++;
    }
}

function cb3(error,response,html)
{
    if(error)
    {
        console.log("Error Found: "+error);
    }
    else
    {
        let i=0;
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allIssuesTags = document.querySelectorAll(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        let term = 8;
        if(allIssuesTags.length<8)
        term=allIssuesTags.length;
        for(i=0;i<term;i++)
        {

            let issName = allIssuesTags[i].textContent;
            let isslink = "https://github.com"+allIssuesTags[i].href;
            issuesProcess(issName,isslink);
        }  

        if(i==term)
        {
           
            let data = JSON.stringify(issues);                                       // because writeFileSync reads only string so for converting object to string we use JSON
            let pathJson = path.join(repoFolderPath[k],"Issues.json"); 
            fs.writeFileSync(pathJson,data);
        }  
        k++;
        issues=[];

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
