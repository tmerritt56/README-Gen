// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // need to add license badge codes.
  if(license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === "BSD 3") {
    '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else (license === "no license") 
    return "";
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "no license") {
    return "";
  } else {
    return `[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "no license") {
    return "";
  }else {
    return `## License 
    Project licensed by ${license}license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}
  
  ## Table of Contents:
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributing](#contributing)
  -[Test](#test)
  ${renderLicenseLink(data.license)}
  -[Questions](#questions)


  ## Installation:
  ${data.installation}
  
  ## Usage:
  ${data.usage}
  
  ## Contributing:
  ${data.contributing}
  
  ## Tests:
  ${data.tests}
  
${renderLicenseSection(data.license)}
  
  ### Questions:
  - Please reach out to me with any ques.
  - Github Link: [https://github.com/${data.user}/]
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
