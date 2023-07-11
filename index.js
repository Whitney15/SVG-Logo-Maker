// Inquirer (node package manager) import
// requiring the shape class to get the triangle, circle and square
// const to write our file
const fs = require("fs");
const inquirer = require("inquirer");
const {Square, Circle, Triangle} = require("./lib/shapes");

// text prompt questions show in Terminal
const questions = [
    // text prompt
    {
        type: "input",
        name: "text",
        message: "What text would you like to display on the logo? Enter up to (3) chacters:",
        
    },
    // text color
    {
        type: "input",
        name: "text-color",
        message: "What color would you like the text to be? Choose a text color by entering a hexadecimal color number:",
        
    },
    // shape choice
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["Square", "Circle", "Triangle"],
        
    },
    // shape color
    {
        type: "input",
        name: "shape-color",
        message: "What color would you like the shape to be? Choose a text color by entering a hexadecimal color number:",
        
    },
];

// ????
class Logo{
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }
    render(){
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000>${this.shape}${this.text}/svg> `;
    }
    setTextElement(text,color){
        if(text.length > 3){
            throw Error('Please enter up to (3) chacters only!')
        }
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setshapeElement(shape){
        this.shapeElement = shape.render();
    }
}

// SVG file creation
function writeToFile(fileName, data) {
    var item = logoGenerator(data);
    fs.writeFile(fileName, item, function(error){
        if (error) {
            return console.log(error);
        }

        console.log('Generated logo.svg');
    });
}

// initialize app
function init() {
    inquirer.createPromptModule(questions).then(function(data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

// call to initialize the SVG logo maker app
init();