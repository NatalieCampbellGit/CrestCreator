// TODO in cosole: npm i
// install the packages
// TODO in console: npm install inquirer svg-captcha
// create the package to generate the SVG logo 
// TODO in console: npm test
// run the testing code of the app 
// TODO in console: node index.js
// run the logo generator application  

//! Test Answers
// nkc
// grey 
// select shape using arrows
// blue 

// Include packages needed for this application (inquirer)
// List global constant references 

const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const colourRegex = /^#[0-9A-Fa-f]{6}$|^[a-zA-Z]+$/; // Regex pattern to match color names or hex values

const questions = [
  // TEXT
  {
    type: 'input',
    message: 'Enter up to three characters for your logo:',
    name: 'text',
    validate: function (input) {
      if (input.length > 3) {
        throw new Error('Please enter three characters only');
      }
      return true;
    }
  },
  // TEXT COLOUR 
  {
    type: 'input',
    message: 'Enter the colour of the text (e.g., red, #FF0000):',
    name: 'textColour',
    validate: function (input) {
      
      if (!input) {
        throw new Error('Please enter a coloUr');
      } else if (!colourRegex.test(input)) {
        throw new Error('Please enter a valid coloUr name or hex value');
      }

      return true;
    }
  },
  // SHAPE
  {
    type: 'list',
    message: 'Select the logo shape:',
    name: 'shape',
    choices: ['circle', 'triangle', 'square']
  },
  // SHAPE COLOUR 
  {
    type: 'input',
    message: 'Enter the shape colour (e.g., white, #FFFFFF):',
    name: 'shapeColour',
    validate: function (input) {
      
      if (!input) {
        throw new Error('Please enter a coloUr');
      } else if (!colourRegex.test(input)) {
        throw new Error('Please enter a valid coloUr name or hex value');
      }

      return true;
    }
  }
];

function generateLogo(answers) {
  let shape;
  switch (answers.shape) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape');
  }

  shape.setColour(answers.shapeColour);
  shape.setText(answers.text);
  shape.setTextColour(answers.textColour);

  const svgContent = shape.render();
 
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgContent}</svg>`;

  // Save the SVG file as logo.svg
  fs.writeFileSync('logo.svg', svg);

  // Print the success message
  console.log('Generated logo.svg');
}

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      generateLogo(answers);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

init();
