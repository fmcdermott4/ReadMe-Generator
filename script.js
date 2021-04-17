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
        choices: [
            '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            'GNU GENERAL PUBLIC LICENSE',
            'MIT License',
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            'Boost Software License - Version 1.0',
            'CC0 1.0 Universal',
            'Eclipse Public License - v 2.0',
            'GNU AFFERO GENERAL PUBLIC LICENSE, V3',
            'GNU GENERAL PUBLIC LICENSE, V2',
            'GNU LESSER GENERAL PUBLIC LICENSE, V2.1',
            'Mozilla Public License Version 2.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
]
inquirer.prompt(questions).then((answers) => {
    
    fs.writeFile('README.md', JSON.stringify(answers) , (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    
    console.log(answers.title);
  });