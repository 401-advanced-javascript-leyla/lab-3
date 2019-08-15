'use strict';

//use fs and fs-extra

const fs =  require('fs');
const fsExtra = require('fs-extra');

class FileSystem{
    readFile(fileName, callback){
        fs.readFile(fileName, (error, fileContents)=>{
            if(error){
                callback(error);
            }else{
                callback(undefined,JSON.parse(fileContents));
            }
        })
    }

    writeFile(fileName,data){
        fs.writeFile(fileName,data,err=>{
            if(err){
                console.log('there is an error in writeFile');
            }else{
                console.log('new stuff is written into json');
            }
        })
    }

    readFilePromises(fileName){
        return fsExtra.readFile(fileName);
    }

    writeFilePromises(fileName,data){
        fsExtra.writeFile(fileName,data);
    }
}


module.exports = FileSystem;