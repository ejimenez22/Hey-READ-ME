
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License == 'None') {
    return ''
  } else if (License == 'MIT') {
  return `
  ![${License}](https://img.shields.io/badge/License-MIT-yellow.svg)
  `
  } else 
  return `
  ![${License}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(License) {
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License == 'None') {
    return ''
  } else 
  return `
  ## License
  The license used for this project is [${License}](#License).
  `
}

// Markdown for README 
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ${renderLicenseBadge(data.License)}
  ## Description 
  https://github.com/${data.Github}/${data.Title}
  <br />
  ${data.Description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
  ## Installation
  Here is what you need to install this application: 
  <br />
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## Contributing
  The following users contributed to this project:
  <br />
  ${data.Contributing}
  ## Test
  Here is a sample test of the application running:
  <br />
  ## Questions
  If you have any questions please reach out to me at:
  <br />
  https://github.com/${data.Github}
  <br />
  ${data.Email}
  <br />
  ${renderLicenseSection(data.License)}
`;
}

module.exports = generateMarkdown;