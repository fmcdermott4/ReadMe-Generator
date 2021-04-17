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
        name: 'contribution',
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
            'Apache License 2.0',
            'GNU GENERAL PUBLIC LICENSE v3.0',
            'MIT License',
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            'Boost Software License - Version 1.0',
            'CC0 1.0 Universal',
            'Eclipse Public License - v 2.0',
            'GNU AFFERO GENERAL PUBLIC LICENSE, V3',
            'GNU GENERAL PUBLIC LICENSE, V2',
            'GNU LESSER GENERAL PUBLIC LICENSE, V2.0',
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
    let license = '\n'+ switchLicense(answers.license);
    let description = '\n\n# Description\n\n\t' + answers.description;
    let tableOfContents = '\n\n## Table of Contents\n\n' + tocs(answers.title);
    let installation = '\n\n## Installation\n\n\t' + answers.installation;
    let usage = '\n\n## Usage\n\n\t' + answers.usage;
    let licenseDescription = '\n\n## License\n\n\t' + 'Application is covered under ' + answers.license ;
    let contributing = '\n\n## Contributing\n\n\t' + answers.contributing;
    let tests = '\n\n## Tests\r\n\n\t' + answers.test;
    let questions = '\n\n## Questions\n\n\t' + 'https://github.com/' +answers.gitHub + '/\n\t' + answers.email;   
    
    let readme = title + license + description + tableOfContents + installation + usage + licenseDescription + contributing + tests + questions;
    
    fs.writeFile('README.md', readme , (err) =>
        err ? console.error(err) : console.log('Success!')
    );
});
function switchLicense(license){
    let code;
    switch (license) {
        case 'Apache License 2.0':
            code = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            break;
        case 'GNU GENERAL PUBLIC LICENSE v3.0':
            code = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
            break;
        case 'MIT License':
            code = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
            break;
        case 'BSD 2-Clause License':
            code = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
            break;
        case 'BSD 3-Clause License':
            code = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
            break;
        case 'Boost Software License - Version 1.0':
            code = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
            break;
        case 'CC0 1.0 Universal':
            code = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
            break;
        case 'Eclipse Public License - v 2.0':
            code = `[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`
            break;
        case 'GNU AFFERO GENERAL PUBLIC LICENSE, V3':
            code = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
            break;
        case 'GNU GENERAL PUBLIC LICENSE, V2':
            code = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
            break;
        case 'GNU LESSER GENERAL PUBLIC LICENSE, V2.0':
            code = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
            break;
        case 'Mozilla Public License Version 2.0':
            code = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
            break;
        case 'The Unlicense':
            code = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
            break;
    }
    return code;
}

function tocs(x) {
    let toc;
    toc = `- [` + x + `](#` + x + `)\n- [Description](#description)\n* [Table of Contents](#table-of-contents)\n  * [Installation](#installation)\n  * [Usage](#usage)\n  * [License](#license)\n  * [Contributing](#contributing)\n  * [Tests](#tests)\n  * [Questions](#questions)`
    return toc;
}