const fs = require("fs");
const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes");

class Logo {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }
  render() {
    return `<svg height="200" width="300" xmlns="http://www.w3.org/2000">${this.shapeElement}${this.textElement}</svg> `;
  }
  setTextElement(text, color) {
    if (text.length > 3) {
      throw new Error('Please enter up to (3) characters only!');
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

function writeToFile(fileName, data) {
  function logoGenerator(svgData) {
    if (svgData.shape === "Square") {
      const userShape = new Square();
      userShape.setColor(svgData["shape-color"]);
      return userShape;
    } else if (svgData.shape === "Circle") {
      const userShape = new Circle();
      userShape.setColor(svgData["shape-color"]);
      return userShape;
    } else if (svgData.shape === "Triangle") {
      const userShape = new Triangle();
      userShape.setColor(svgData["shape-color"]);
      return userShape;
    }
    throw new Error("Invalid shape choice!");
  }

   const item = logoGenerator(data);
  const logo = new Logo();
  logo.setShapeElement(item);
  logo.setTextElement(data.text, data["text-color"]);
  const svg = logo.render();

  const exampleFolderPath = './examples/';
  const exampleFilePath = exampleFolderPath + fileName;

  fs.writeFile(exampleFilePath, svg, function (error) {
    if (error) {
      return console.log(error);
    }

    console.log(`Generated ${fileName}`);
  });
}


function init() {
  inquirer.prompt(questions).then(function (data) {
    var fileName = 'logo.svg';
    writeToFile(fileName, data);
  });
}

const questions = [
  // text prompt
  {
    type: "input",
    name: "text",
    message: "What text would you like to display on the logo? Enter up to (3) characters:",
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
    message: "What color would you like the shape to be? Choose a shape color by entering a hexadecimal color number:",
  },
];

init();