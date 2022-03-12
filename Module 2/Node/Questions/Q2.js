// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type
let arr=["audio","video","image","software","documents","applications","other"];
let fs=require("fs");
let path=require("path");
let filename,destPath;
for(let i=0;i<arr.length;i++)
{
    fs.mkdirSync(arr[i]);
    for(let j=1;j<=4;j++)
    {
        if(arr[i]=="audio")
        {   
            
            filename="test"+j+".mp3";
            destPath=path.join(__dirname,arr[i],filename);
            fs.writeFileSync(destPath,"Audio File")
        }
        else if(arr[i]=="video")
        {
            filename="test"+j+".mp4";
            destPath=path.join(__dirname,arr[i],filename);
            fs.writeFileSync(destPath,"Video File");
        }
        else if(arr[i]=="image")
        {
            filename="test"+j+".mp3";
            destPath=path.join(__dirname,arr[i],filename);
            fs.writeFileSync(destPath,"Image File")
        }
        else if(arr[i]=="software")
        {
            filename="test"+j+".exe";
            destPath=path.join(__dirname,arr[i],filename);
            fs.writeFileSync(destPath,"Software File")
        }
        else if(arr[i]=="documents")
        {
            filename="test"+j+".doc";
            destPath=path.join(__dirname,arr[i],filename);
            fs.writeFileSync(destPath,"Document File")
        }
        else if(arr[i]=="applications")
        {
            filename="test"+j+".app";
            destPath=path.join(__dirname,arr[i],filename);
            fs.writeFileSync(destPath,"Application File");
        }
        else if(arr[i]=="other")
        {
            filename="test"+j+".xml";
            destPath=path.join(__dirname,arr[i],filename);
            fs.writeFileSync(destPath,"Other File");
        }
    }
}