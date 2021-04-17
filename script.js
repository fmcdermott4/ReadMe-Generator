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
            'Apache License',
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
    // title
    let title = "# " + answers.title;
    let license = '\n'+ answers.license
    let description = '\n\n # Description\r\n\n\t' + answers.description;
    let tableOfContents = '\n\n## Table of Contents';
    let installation = '\n\n## Installation\r\n\n\t' + answers.installation;



    
    
    let readme = title + license + description + tableOfContents + installation
    
    fs.writeFile('README.md', readme , (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});