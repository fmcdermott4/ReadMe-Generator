const fs = require('fs');
var inquirer = require('inquirer');

var questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project description?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are your project's installation instructions?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is your project usage information?"
    },
    {
        type: 'input',
        name: 'cContribution',
        message: "What are  your project's contribution guidelines?"
    },
    {
        type: 'input',
        name: 'test',
        message: "What are your project's test instructions?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        
    }
]
inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    fs.writeFile('log.txt', JSON.stringify(answers) , (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    // console.log(JSON.stringify(answers, null, '  '));
  });