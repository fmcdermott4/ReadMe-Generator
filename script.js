const fs = require('fs');
var inquirer = require('inquirer');

var questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What's your project title?"
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: "What is your project description?"
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: "What are your project's installation instructions?"
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: "What is your project usage information?"
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: "What are  your project's contribution guidelines?"
    },
    {
        type: 'input',
        name: 'projectTest',
        message: "What are your project's test instructions?"
    }
]
inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    fs.writeFile('log.txt', JSON.stringify(answers) , (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    // console.log(JSON.stringify(answers, null, '  '));
  });