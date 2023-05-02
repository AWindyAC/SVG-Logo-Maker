const inquirer = require('inquire');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo');

inquirer
.prompt([
    {
        type: 'input',
        message: 'What text would you like you in your logo?',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'text color',
    },
    {
        type: 'list',
        message: 'What shape would you like you logo to be?',
        name: 'shape',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shape color',
    }
])

function writeToFile(fileName, data)
{
    const content = generateLogo(data);
    fs.writeFile(fileName, content, function(err) {
        if (err) {
            console.log(err);
        }
        console.log('Generated logo.svg');
    });
}

function init(){
    inquirer.prompt(questions).then(function(data){
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();