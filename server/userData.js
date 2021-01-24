const { prompt } = require('enquirer');

const question = [
    {
        type: 'input',
        name: 'webName',
        message: "Project's name"
    },
    {
        type: 'input',
        name: 'host',
        message: "Which url you want to use (example.com)?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Which email do you want to use?"
    },
    {
        type: 'input',
        name: 'git',
        message: "Github base source of index files to clone?"
    },
];

async function gatherUserData() {
    return prompt(question)
}

module.exports = {
    gatherUserData,
}