'use strict'

const faker = require('faker');

const FileSystem = require('./lib/file-system');

const myFileSystem = new FileSystem();

//using callback

// myFileSystem.readFile(`${__dirname}/data/person.json`,(error,fileContent)=>{
//     if(error){
//         console.log('error happens at myFilesSystem.readFile');
//     }else{
//         let originalContent = fileContent;
//         originalContent.firstName = faker.name.firstName();
//         myFileSystem.writeFile(`${__dirname}/data/person.json`, JSON.stringify(originalContent));
//     }
// });

//using Promise function

myFileSystem.readFilePromises(`${__dirname}/data/person.json`)
  .then(fileContent=>{
    let originalContent = JSON.parse(fileContent.toString());
    console.log(originalContent);
    originalContent.lastName  = faker.name.lastName();
    myFileSystem.writeFilePromises(`${__dirname}/data/person.json`, JSON.stringify(originalContent));
  })
  .catch(error=>console.log('There is an error in myFileSystem.readFilePromises',error));




