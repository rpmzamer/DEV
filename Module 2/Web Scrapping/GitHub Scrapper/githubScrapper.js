const request = require("request");
const jsdom = require("jsdom");
const fs = require("fs");
const path = require("path");
const { JSDOM } = jsdom;
let issues=[];
const link = "https://github.com/topics";
let counter = 0 ;
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
            // console.log(parentfolderName);
            if(!fs.existsSync(parentfolderName))
            {
                fs.mkdirSync(parentfolderName);
                topicpath[i] = path.join(__dirname,parentfolderName);
            }    
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
        let termcb2 = 8;
        if(allGitRepoName.length<8)
        termcb2=allGitRepoName.length;
        for(let i=0;i<termcb2;i++)
        {
            let s=allGitRepoName[i].textContent.split("/");    // since repoName was comming for e.g        wordplate  /       wordplate
            let singleRepoName = s[0].trim()+"/"+s[1].trim();    // We used Trim() because the text had whitespaces         
            let singleRepoNameCrop = s[0].trim();
            let completeRepoIssueLink = "https://github.com/"+singleRepoName+"/issues";
            // console.log(completeRepoIssueLink);
            // console.log(topicpath[j]+"\\" + singleRepoNameCrop);
                                                                                     //path.join(repoFolderPath),singleRepoName)
             if(!fs.existsSync(topicpath[j]+"\\" + singleRepoNameCrop))
             {
                fs.mkdirSync(topicpath[j]+"\\" + singleRepoNameCrop);
                repoFolderPath.push(topicpath[j]+"\\" + singleRepoNameCrop);
             }
            //  console.log(completeRepoIssueLink);
             request(completeRepoIssueLink,cb3); 
             counter++;      
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
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let allIssuesTags = document.querySelectorAll(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        let term = 8;
        if(allIssuesTags.length<8)
        term=allIssuesTags.length;
        for(let i=0;i<term;i++)
        {
            // console.log(allIssuesTags[i].textContent);
            let issName = allIssuesTags[i].textContent;
            let isslink = "https://github.com"+allIssuesTags[i].href;
            issuesProcess(issName,isslink);
        }  
        // let data = JSON.stringify(issues);
        console.log(repoFolderPath.length);
        // fs.writeFileSync(path.join(repoFolderPath[k],issues.json),data);
        issues=[];
        counter--;
        // if(counter==0)
        // {
        //     console.log(issues);
        //     let data = JSON.stringify(issues);                       // because writeFileSync reads only string so for converting object to string we use JSON
        //     fs.writeFileSync(path.join(repoFolderPath[k],Issues.json),data);
        // }
        k++;
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