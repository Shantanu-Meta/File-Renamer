const fs = require('node:fs');
const path = require('path');
// const prompt = require('prompt-sync')({sigint: true});
const prompt = require('prompt-sync')();
// const inquirer = require('inquirer');
const dir =  __dirname; 

fs.readdir(dir,(err, data) => {
  if (err) {
    console.log("Unsuccessful to open "+dir + "due to" + err);
    return;
  }
    let oldName, newName;
    while(1){
        oldName = prompt("String u want to rename: "); 
        newName = prompt("String u want to have: "); 
        const permission = prompt(`All [${oldName}] will be renamed as [${newName}], Do u want to Proceed[Y/N]: `).trim().toLowerCase();

        if(permission==='y' || permission==='yes'){
            break; 
        }
    }
        
    for(let i=0; i<data.length; i++){
        const currFile =data[i];
        oldFile =path.join(dir, currFile); 
        const fileName = path.parse(currFile).name.replaceAll(oldName, newName);
        const extName = path.parse(currFile).ext; 
        newFile = path.join(dir,fileName+extName); 

        fs.rename(oldFile, newFile, ()=>{
            console.log("File renamed successfully")
        })
    }
});