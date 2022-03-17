//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File
let fs=require("fs");
let path=require("path");
let content=fs.readdirSync("Unorganised");
let extensions={
    Image:[".jpg"],
    Audio:[".mp3"],
    Video:[".mp4"],
    Doc:[".doc",".pdf"],
    Others:[".zip",".xlsx"]
}
for(let i=0;i<content.length;i++)
{
for(let key in extensions)
{
    let arr=extensions[key];
    for(let j=0;j<arr.length;j++)
    {
        if(path.extname(content[i])==arr[j])
        {
            console.log(content[i]+" --> "+key);
        }
    }
    
}
}