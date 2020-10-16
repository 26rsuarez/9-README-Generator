//required modules
const fs = require("fs");
const util = require("util");

//this are the functions needed from the other js files
const {promptUser} = require("./askquestions.js");
const {renderReadMe} = require("./renderReadme");

const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
    try{
        //prompt the user and wait for answers
        const answers = await promptUser();
        //use those answers to render read.me
        const readmeTemplate = renderReadMe(answers);
        //write the file
        await writeFileAsync("README.me", readmeTemplate);
        console.log("Success");
    } catch(err) {
        console.log(err)
    }

}

init();