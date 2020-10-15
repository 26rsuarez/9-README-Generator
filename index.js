const fs = require("fs");
const util = require("util");

const {promptUser} = require("./askquestions.js");


async function init() {
    try{
        const answers = await promptUser();
        console.log(answers);
    } catch(err) {
        console.log(err)
    }

}

init();