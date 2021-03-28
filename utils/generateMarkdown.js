// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    `## ${answers.title}
  
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
}

module.exports = generateMarkdown;
