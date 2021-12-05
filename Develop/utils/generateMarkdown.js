const MarkdownIt = require("markdown-it");

const md = new MarkdownIt()

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
  return`
  # ${data.title}

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
  Licensed under the ${data.license} license.
  `;
}
const generate = {
  generateMarkdown,
  renderLicenseSection,
  renderLicenseLink,
  renderLicenseBadge
}

module.exports = generate;
