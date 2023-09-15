const inquirer = require('inquirer');
const fs = require("fs");

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your website?: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your Description?: ',
        name: 'description'
    },
     {
        type: 'input',
        message: 'Installation instructions for the website? (If none: N/A): ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the Usage?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide contributions',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Provide test instructions',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Provide your github username',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your email? : ',
        name: 'email',
    },
    {
        type: 'rawlist',
        message: 'Which license did you use for this project?',
        choices: ["none", "Apache License 2.0", "GNU General Public License v3.0", "MIT", "BSD 2 Clause", "BSD 3 Clause", "Boost Software 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public v3.0", "GNU General Public v2.0", "GNU Lesser General Public v2.1", "Mozilla Public 2.0", "The Unlicense"],
        name: 'license',
    }
    ]).then((data)=> {
    console.log(data)
    const readMeString = buildReadMe(data);
    fs.writeFile('README.md', readMeString, (err) => err ? console.error(err) : console.log("added ReadMe successfully!"));
    fs.writeFile('screenshot.JPG','C:\Users\nfill\Pictures\Anheuser-Busch\team-1st-shift.JPG',(err) => err ? console.error(err) : console.log("added ReadMe successfully!") )
})



function buildReadMe(data){
    const {title, description, installation, usage, contributions, githubUsername, email, license} = data;
    let licenseBadge = buildReadMeLicense(license);
    return `
# ${title}
![NPM](https://img.shields.io/npm/l/NPM)
## Description
    
    ${description}
    
##Table of Contents

**- [Installation](#installation)**
**- [Usage](#usage)**
**- [License](#license)**
**- [Contributing](#contributing)**
**- [Screenshots](#screenshots)**
  
## Installation
    
    ${installation}
    
## Usage
    
    ${usage}
    
## License
    
    ${license}
![Static Badge](https://img.shields.io/badge/${licenseBadge}-blue)

## Contributing
    
    ${contributions}

## Tests
    
## Questions
    ${githubUsername}
    ${email}
    `
}

function buildReadMeLicense(license1){
    var newString = license1.replace(/ /g,"_");
    return newString;
    
}

