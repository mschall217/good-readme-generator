// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//what we use to get the data
const fs = require('fs');
//allows us to write files

function generateRepoName(title){
  const repoName = title.split(' ').join("-")
  return `${repoName}`;
};

function generateMarkdown(answers) {
  const content = `## ${generateRepoName(answers.title)}

  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test] (#test)
  - [Support](#support)
  - [Contributing](#contributing)
  - [License] (#license)
  
  ## Installation

    ${answers.install}
  
  ## Usage
  
    ${answers.usage}
  
  ## Test

    ${answers.test}
  
  ## Support
  
  Please [open an issue](https://github.com/${answers.github}/${answers.title}/issues/new) for support.
  
  ## Contributing
  
  ${answers.contributing}
  
  ## License

  ${answers.license}
  
  ## Questions 
  Visit my GitHub at ${answers.contact} or email me at ${answers.email} with any questions or concerns 
  `
  return content;
}

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a title for your Project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project',
    },
    {
      type: 'input',
      name: 'install',
      message: 'Enter instructions to use your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information about your project',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter information about any contributions to your project',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions for your project',
    },   
    {
      type: 'list',
      name: 'License',
      message: 'Please Select a license for your project',
      choices: ['MIT', 'Free Public Licesnce', 'Apache License 2.0', 'this one']
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github user name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    },
  ])
}

const init = () => {
  promptUser()
  .then((answers) => {
    fs.writeFile('README.md', generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
}

init()





