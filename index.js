// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//what we use to get the data
//allows us to write files

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
  .then((answers) => {
    console.log(answers)
  });
}

const init = () => {
  promptUser()
}

init()





