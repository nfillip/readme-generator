//Installing packages for app fs and inquirer
const inquirer = require('inquirer');
const fs = require("fs");

//function: initializes app of list of questions for user.
function init() {
inquirer.prompt([
    {
        type: 'input',
        message: '\033[35mTitle\033[0m - What is the name of your website?: ',
        name: 'title'
    },
    {
        type: 'input',
        message: '\033[35mDescription\033[0m - (short description explaining the what, why, and how of your project): ',
        name: 'description'
    },
     {
        type: 'input',
        message: '\033[35mInstallation\033[0m - (What are the steps required to install your project?)(If none: N/A): ',
        name: 'installation'
    },
    {
        type: 'input',
        message: '\033[35mUsage\033[0m - (Instructions/examples for how to use the website): ',
        name: 'usage'
    },
    {
        type: 'input',
        message: '\033[35mContributions\033[0m - Provide contributions (separate each contributor with \033[91m<br>\033[0m): ',
        name: 'contributions',
    },
    {
        type: 'input',
        message: '\033[35mTests\033[0m - Provide test instructions',
        name: 'test',
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
    
})
}

//function: returns a formatted Readme string to then send through fs.
function buildReadMe(data){
    const {title, description, installation, usage, contributions, test, githubUsername, email, license} = data;
    let licenseBadge = buildReadMeLicense(license);
    return `
# ${title} ${licenseBadge}

---
##🔎Description
    
${description}

---    
##📑Table of Contents

+ **[Installation](#installation)**
+ **[Usage](#usage)**
+ **[License](#license)**
+ **[Contributing](#contributing)**
+ **[Tests](#tests)**

---  
##❓Installation
    
${installation}

---    
##🔎Usage
    
${usage}

---    
##🔒License
    
${license}
${licenseBadge}

---
##💠Contributing
    
${contributions}

---
##✔️Tests
${test}

---
##❓Questions

**Contact Me:**
Email: [${email}](${email})
Github Profile: [https://github.com/${githubUsername}](https://github.com/${githubUsername})

---
© 2023 nfillip LLC. All Rights Reserved.
    `
}

//function: allow choices for all acceptable licenses in github. Returns badges
function buildReadMeLicense(license1){
    switch(license1) {
        case "Apache 2.0 License":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "GNU General Public License v3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "BSD 2 Clause":
            return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"; 
            break;  
        case "BSD 3 Clause":
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";    
            break;
        case "Boost Software 1.0":
            return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
        case "Creative Commons Zero v1.0 Universal":
            return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
            break;
        case "Eclipse Public License 2.0":   
            return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
            break;
        case "GNU Affero General Public v3.0": 
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "GNU General Public v2.0":
            return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
            break;
        case "GNU Lesser General Public v2.1":
            return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
        case "Mozilla Public 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
        case "The Unlicense":
            return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            break;
       
    }
      
}

//init function call
init();