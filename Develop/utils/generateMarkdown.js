// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return "";
}

function generateMarkdown(data) {
  return `# ${data.title} 
${renderLicenseBadge(data.license)}
## User Info
  ${data.name}
  ${data.email}
## Description
  ${data.description}
## Page URL
  ${data.link}
## Table of Contents
* [Features](#features)
* [Languages & Dependencies](#languagesanddependencies)
* [How to Use This Application](#HowtoUseThisApplication)
* [Questions](#questions)
## Features
${data.features}
## How to Use This Application:
${data.usage}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}


module.exports = generateMarkdown;
