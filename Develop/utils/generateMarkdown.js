const MarkdownIt = require("markdown-it");

const md = new MarkdownIt()

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    gnugplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    mit : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    isc: '[ISC](https://choosealicense.com/licenses/isc/)',
    mit: '[MIT](https://choosealicense.com/licenses/mit/)',
    GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  return (`${licenseLinks[license]}`)
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the ${renderLicenseLink(license)}) license.`
  } else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ### Table of contents
  - [Project description](#Description)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ### ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contributing
  ${data.contributing}

  ## Questions
  ${data.email}
  ${data.github}

  ## License
  ${renderLicenseSection(data.license)}
  `;
}
const generate = {
  generateMarkdown,
  renderLicenseLink,
  renderLicenseBadge
}

module.exports = generate;
