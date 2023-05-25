//improvement opportunity for the user to select a font from a list 
const TEXT_FONT = ["Roboto", "Montserrat", "Pacifico", "Raleway", "Bebas Neue", "Arial"]; //googled popular logo font families 

// common functionality/properties shared by the Triangle, Circle, and Square classes in a parent Shape class 
// and use inheritance to reuse the code in the child classes using 
// class x extends Shape  

class Shape {
  constructor() {
    this.colour = '';
    this.text = '';
    this.textColour = '';
  }

  setColour(colour) {
    this.colour = colour;
  }

  setText(text) {
    this.text = text;
  }

  setTextColour(textColour) {
    this.textColour = textColour;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.colour}" />
      <text x="150" y="125" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="150" cy="105" r="80" fill="${this.colour}" />
      <text x="150" y="110" font-size="60" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x="150" y="75" width="250" height="250" fill="${this.colour}" />
      <text x="225" y="150" dominant-baseline="middle" text-anchor="middle" fill="${this.textColour}" font-size="60">${this.text}</text>
    </svg>`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
