// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let arr=["audio","video","image","software","documents","applications","other"];
let arr_format=[".mp3",".mp4",".jpeg",".exe",".pdf",".apk",".rar",]
let fs=require("fs");
let path=require("path");
let filename,destPath;
if(!fs.existsSync("Q2"))
fs.mkdirSync(path.join(__dirname,"Q2"))
for(let i=0;i<arr.length;i++)
{
    if(!fs.existsSync(arr[i]))
    fs.mkdirSync(path.join(__dirname,"Q2",arr[i]));
    for(let j=1;j<5;j++)
    {
            filename="test"+j+arr_format[i];
            destPath=path.join(__dirname,"Q2",arr[i],filename);
            fs.writeFileSync(destPath,arr[i]);
        
    }
}
