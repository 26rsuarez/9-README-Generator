const fs = require("fs");
const util = require("util");

const {promptUser} = require("./askquestions.js");
const {renderReadMe} = require("./renderReadme");

const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
    try{
        const answers = await promptUser();
        const readmeTemplate = renderReadMe(answers);
        
        await writeFileAsync("README.me", readmeTemplate);
        console.log("Success");
    } catch(err) {
        console.log(err)
    }

}

init();