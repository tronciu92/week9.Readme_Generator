const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const generateMarkdown = require("./tools/markdown");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "name",
        message: "Project Name"
    },{
        type: "input",
        name: "install",
        message: "Project install"
    },{
        type: "input",
        name: "description",
        message: "Project Description"
    },{
        type: "input",
        name: "usage",
        message: "Project usage explain"
    },{
        type: "input",
        name: "language",
        message: "Project Use Language"
    },{
        type: "input",
        name: "github",
        message: "Project Github URL (empty value to skip)"
    },{
        type: "input",
        name: "homePage",
        message: "Project Home Page URL (empty value to skip)"
    },{
        type: "input",
        name: "screenshot",
        message: "Screenshot"
    },{
        type: "list",
        message: "License",
        name: "license",
        choices: [
        "MIT",    
        "ISC",
        "IPL-1.0",
        "Apache-2.0",
        "Zlib"
        ]
    },{
        type: "input",
        name: "test",
        message: "Testing File"
    },{
        type: "input",
        name: "author",
        message: "Github Userame"
    },{
        type: "input",
        name: "email",
        message: "Email"
    }
];


function init() {
    inquirer.prompt(questions)
        .then(answer => {
            return generateMarkdown(answer);
        })
        .then(data => {
            writeFileAsync("README.md", data);
            console.log("README file created!");
            })
            .catch(err => { console.log(err) });
}

init();