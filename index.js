const inquirer = require('inquire');
const fs = require('fs');
const SVG = require('./lib/svg');
const { Circle, Triangle, Square } = require('./lib/shapes');
const { writeFile } = require('fs/promises'); //Getting access to use writeFile from the file system.

init();

//List of questions in the inquirer
function init(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What text would you like you in your logo?', //logo text
            name: 'text',
        },
        {
            type: 'input',
            message: 'What color would you like the text to be?', //text color
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like you logo to be?', //logo shape
            name: 'shapeType',
            choices: ['Triangle', 'Square', 'Circle'],
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be?', //shape color
            name: 'shapeColor',
        }
    ])
    //What happens after the questions are answered.
    .then(({text, textColor, shapeType, shapeColor}) => {
        let Shape;
        //Check 
        switch (shapeType) {
            case "Triangle":
                Shape = new Triangle();
                break;
            case "Square":
                Shape = new Square();
                break;
            default :
                Shape= new Circle();
                break;
            };
        shape.setColor(shapeColor);
        //Create a new SVG object using the information user has given.
        const svg = new SVG(); //new SVG object.
        svg.setText(text, textColor); //use setText method created in svg.js 
        svg.setShape(shape); //use setShape method created in svg.js
        return writeFile('logo.svg', svg.render()); //use writeFile to create a new svg file
    })
    //if an error occurs, print this to the console. 
    .catch((error) => {
        console.log("Error:", error);
    })
}