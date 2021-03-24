// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//what we use to get the data
const fs = require('fs');
//allows us to write files

// TODO: Create a function to write README file
const generateREADME = (answers) =>
  `document file structure goes here`

// TODO: Create an array of questions for user input
inquirer
    .prompt([ 
    {
    type: 'input',
    name: 'title',
    message: 'Enter a title for your Prject',
  },
  {
    type: 'input',
    name: 'descripton',
    message: 'Enter a description of your project',
  },
  {
    type: 'input',
    name: 'instructions',
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
    message: 'Enter contribution guidelines about your project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions for your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['MIT', 'free'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your github user name',
  },
]);
.then((answers) =>{
    const readMEPageContent = generateREADME(answers);
    fs.writeFile('README.md', readMEPageContent, (err) =>
    err ? console.log(err) : console.log('You wrote a read me!')
    );
});

// TODO: Create a function to initialize app

// Function call to initialize app
init();





