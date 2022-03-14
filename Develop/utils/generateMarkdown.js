// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('license', license);
  let licenseBadge = [];
  if (license.includes('Apache 2.0 License')) {
    licenseBadge.push('![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)')
  }
  if (license.includes('Creative Commons Zero v1.0 Universal')) {
    licenseBadge.push('![License](https://img.shields.io/badge/License-Creative__Commons%20Zero%20v1.0-blue.svg)')
  }
  if (license.includes('Eclipse Public License 2.0')) {
    licenseBadge.push('![License](https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-blue.svg)')
  }
if(licenseBadge.length === 0) {
  return ''
} else {
  return licenseBadge
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes('Apache 2.0 License')) {
    return '[![License: ${license}](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license.includes('Creative Commons Zero v1.0 Universal')) {
    return '[![License: ${license}](https://creativecommons.org/publicdomain/zero/1.0/)';
  }
  if (license.includes('Eclipse Public License 2.0')) {
    return '[![License: ${license}](https://www.eclipse.org/legal/epl-2.0/)';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return '';
  }
  else {
    return `${renderLicenseLink(license)}
  ${renderLicenseBadge(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # ${renderLicenseBadge(data.license)}
  ## Project Description 
  ${data.description}
  ## Table of Contents
  [Installation](#Installation-Process)
  [Instructions](#Usage-Instructions)
  [License](#License)
  [Contributers](#Contributers)
  [Testing](#Testing)
  [Questions](#Contact-Information)
  ## Installation Process 
  ${data.installation}
  ## Usage Instructions 
  ${data.usage}
  ## License 
  ${data.license}
  ## Contributers 
  ${data.contributers}
  ## Testing 
  ${data.tests}
  ## Questions 
  ### Checkout my GitHub profile to see more of my projects at: https://github.com/${data.username}
  ### Contact me by email at: ${data.email} `
}

module.exports = generateMarkdown;
