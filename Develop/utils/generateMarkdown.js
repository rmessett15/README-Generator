// This function is what generates the markdown file for README.md doc to be generated
function generateMarkdown(data) {
  return `# ${data.title}`;
}

// Exporting generateMarkdown function
module.exports = generateMarkdown;
