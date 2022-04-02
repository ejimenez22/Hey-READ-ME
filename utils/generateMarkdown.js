
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
function generateMarkdown(data) {
  return `
  # ${data.Title}
  ## Description 
  https://github.com/${data.Github}/${data.Title}
  ${data.Description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage] (#Usage)
  * [License] (#License)
  * [Contributing] (#Contributing)
  * [Test] (#Test)
  * [Questions] (#Questions)
  ## Installation
  Here is what you need to install this application: 
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  The license used for this project is: ${data.License}
  ## Contributing
  The following users contributed to this project:
  ${data.Contributing}
  ## Test
  Here is a sample test of the application running:
  ${data.Test}
  ## Questions
  If you have any questions please reach out to me at:
  https://github.com/${data.Github}
  ${data.Email}
`;
}

module.exports = generateMarkdown;