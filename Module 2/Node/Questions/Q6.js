//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File
let fs=require("fs");
let path=require("path");
let content=fs.readdirSync("Unorganised");
for(let i=0;i<content.length;i++)
{
    let extn=path.extname(content[i]));
    switch(extn)
    {
        case '.jpg' :console.log("Image File");
        break;
        case'.mp3':console.log("Audio File")

    }
}