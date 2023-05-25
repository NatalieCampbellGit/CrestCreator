//! Jest Shapes Test 
// Testing is all about coverage 
// There will be code that is testable by Jest methods while some remains manual

// TODO in console: npm install jest
// TODO in console: npm i 
// TODO in console: npm install inquirer svg-captcha
// TODO in console: npm test 

// Constructor shape classes is imported 
const { Triangle, Circle, Square } = require('../lib/shapes');

describe('Logo SVG App', () => {
  // Test the Triangle class
  describe('Triangle', () => {
    it('should create a triangle with text and colour', () => {
      const shape = new Triangle();
      shape.setColour('blue');
      const svgString = shape.render();
      expect(svgString).toContain('fill="blue"');
    });
  });

  // Test the Circle class
  describe('Circle', () => {
    it('should create a cirlce with text and colour', () => {
      const shape = new Circle();
      shape.setColour('red');
      const svgString = shape.render();
      expect(svgString).toContain('fill="red"');
    });
  });

  // Test the Square class
  describe('Square', () => {
    it('should create a square with text and colour', () => {
      const shape = new Square();
      shape.setColour('green');
      const svgString = shape.render();
      expect(svgString).toContain('fill="green"');
    });
  });
});

//! Jest Text Test
// Testing the text longer than 3 characters 
// setting the expectation that the length should be equal to 3 
// test('setText() should limit the text to 3 characters', () => {
//     const shape = new Triangle();
//     shape.setText('abcdefgh'); 
//     const text = shape.text;
//     expect(text.length).toEqual(3); 
// });

//! Jest Colour Test 
// // for shape colours, run through generalised standard colours 
// // for each shape type that is available 
// describe('Shape Colours', () => {
//     test('Shapes render correctly with standard colours', () => {
//       const colours = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'pink', 'grey']; // List of standard colours
//       const shapeTypes = ['Triangle', 'Circle', 'Square']; // Shapes list

//       shapeTypes.forEach((shapeType) => {
//         colours.forEach((colour) => {
//           const shape = new shapes[shapeType]();
//           shape.setColour(colour);
//           const svg = shape.render();
  
//           expect(svg).toContain(`fill="${colour}"`);
//         });
//       });
//     });
//   });

  // Jest Colour and Shape Test for each shape 
  // use a loop for each shape rather than list one for each 
  // same as listed for the shapes.js 
  // common functionality/properties shared by the Triangle, Circle, and Square classes in a parent Shape class 
  // and use inheritance to reuse the code in the child classes 


  // describe('Shape Colours', () => {
  //   test('Triangle renders correctly with standard colours', () => {
  //     const colours = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'pink']; 
  
  //     colours.forEach((colour) => {
  //       const triangle = new shapes.Triangle();
  //       triangle.setColour(colour);
  //       const svg = triangle.render();
  
  //       expect(svg).toContain(`fill="${colour}"`);
  //     });
  //   });
  
  //   test('Circle renders correctly with standard colours', () => {
  //     const colours = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'pink'];
  
  //     colours.forEach((colour) => {
  //       const circle = new shapes.Circle();
  //       circle.setColour(colour);
  //       const svg = circle.render();
  
  //       expect(svg).toContain(`fill="${colour}"`);
  //     });
  //   });
  
  //   test('Square renders correctly with standard colours', () => {
  //     const colours = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'purple', 'pink'];
  
  //     colours.forEach((colour) => {
  //       const square = new shapes.Square();
  //       square.setColour(colour);
  //       const svg = square.render();
  
  //       expect(svg).toContain(`fill="${colour}"`);
  //     });
  //   });
  // });