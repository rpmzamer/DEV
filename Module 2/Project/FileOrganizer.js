let fs=require("fs");
let path=require("path");
let folderPath=process.argv[2];

let extensions = {
    Audio:[".mp3"],
    Video:[".mp4",".mkv"],
    Document:[".doc",".xlsx",".pdf",".txt"],
    Image:[".jpeg",".jpg",".png",".gif"],
    Software:[".exe"]
}

if(fs.existsSync(folderPath))
{
    console.log("Path is Valid");
    let files=fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++)
    {
        let ext = path.extname(files[i]);
        newFolderName=folderName(ext);
        newFolderPath=path.join(folderPath,newFolderName)
        if(fs.existsSync(newFolderPath))
        {
            moveFile(folderPath,newFolderPath,files[i]);
        }
        else
        {
            fs.mkdirSync(newFolderPath);
            moveFile(folderPath,newFolderPath,files[i])
        }
    }
}
else
console.log("Path is Invalid");

function folderName(ext)
{
    for(let key in extensions)
    {
        let extArr=extensions[key];
        for(let i=0;i<extArr.length;i++)
        {
            if(ext==extArr[i])
            {
                return key;
            }
        }
    }
    return "Others"
}
function moveFile(sourceFolderPath,destFolderPath,fileName)
{
    let sourcePath=path.join(sourceFolderPath,fileName);
    let destPath=path.join(destFolderPath,fileName);
    fs.copyFileSync(sourcePath,destPath);
    fs.unlinkSync(sourcePath);
}

