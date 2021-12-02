

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
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}

  ## Project Description:
  ${data.description}
  ### Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  ## Installation Instructions:
  ${data.installation}
  ## Usage Requirements:
  ${data.usage}
  ## Contribution Guidelines:
  ${data.contributions}
  ## Test Instructions:
  ${data.tests}
  ## License:
  This application is licensed by: ${data.license}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
  ## Questions?
  Checkout github.com/${data.username} on GitHub or send an email inquiry to ${data.email}.
`;
}

module.exports = generateMarkdown;
