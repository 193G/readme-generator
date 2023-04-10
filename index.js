const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: "What is the title of your README?",
        name: "title"
    },
    {
      type: 'input',
      message: "Add a Short description about the purpose of this project.",
      name: "description"
    },
    {
      type: 'input',
      message: "what are the step by step instructions on how to install this project.",
      name: "installation"
    },
    {
      type: 'input',
      message: "Add instructions on how to use this project.",
      name: "usage"
    },
    {
      type: 'input',
      message: "Add links to anyhting used to help in this project.",
      name: "credits"
    },
    {
      type: 'checkbox',
      message: "Which license does this repository use?",
      name: "license",
      choices: ["MIT", "Apache license 2.0", "Mozilla Public License 2.0"]
    },
    {
      type: 'input',
      message: "How can someone contribute to this project?",
      name: "contribution"
    },
    {
      type: 'input',
      message: "Enter your github repository.",
      name: "repository",
    },
    {
        type: 'input',
        message: "Enter link to page.",
        name: "page",
    },
    {
      type: 'input',
      message: "Enter your email and github.",
      name: "contact",
    }
];

// Functions
function writeToFile(answers) {
  console.log(typeof answers.license);
  const template = `# ${answers.title}

  ${licenseBadge(answers.license)}

  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Repository](#repository)
  - [Page](#page)
  - [Contact](#contact)
  
  ## Description
  
  ${answers.description}
  
  ## Installation
  
  ${answers.installation}

  ## Usage
  
  ${answers.usage}
  
  ## Credits
  
  ${answers.credits}
  
  ---
  
  ## License
  
  ${answers.license}
  
  ## Contribution
  
  ${answers.contribution}
  
  ## Repository
  
  ${answers.repository}

  ## Page
  
  ${answers.page}

  ## Contact
  
  ${answers.contact}

  ## Questions
  
  You can reach me at [github.com/${answers.github}](https://github.com/${answers.github}) or via email at ${answers.email} with any questions regarding this repository.`;

  return template;
}

function licenseBadge(bananas) {
  console.log(bananas);
  if(bananas == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if(bananas == "Apache license 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (bananas == "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// User interaction
inquirer.prompt([...questions]).then((answers) => {
  const readme = writeToFile(answers);
  fs.writeFile('README.md', readme, 'utf8', (err) => {
    if (err) {
      return console.log(err)
   }
   console.log('README created :)')
  })
})