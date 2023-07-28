const Squirrel = class {
  #name;
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  jump() {
    if (typeof name !== "string") {
      throw new TypeError("enter the string");
    }
    return this.name + " " + "jamping";
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("enter the string");
    }
    this.#name = name;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    if (typeof color !== "string") {
      throw new TypeError("enter the string");
    }
    this._color = color;
  }
};

class SquirrelFly extends Squirrel {
  constructor(name, color, maximumFlight) {
    super(name, color);
    this.maximumFlight = maximumFlight;
  }
  fly() {
    return this.name + " " + "flying " + this.maximumFlight;
  }
  get maximumFlight() {
    return this._maximumFlight;
  }
  set maximumFlight(maximumFlight) {
    if (typeof maximumFlight !== "number") {
      throw new TypeError("enter the number");
    }
    this._maximumFlight = maximumFlight;
  }
}

const arrySquirrelWords = ["lost", "call", 'aaa'];

class SquirrelMagic extends SquirrelFly {
  constructor(name, color, maximumFlight, speakWords) {
    super(name, color, maximumFlight);
    this.speakWords = speakWords;
  }
  speak() {
    this._speakWords.forEach((element) => {
      console.log(element);
    });
  }
  get speakWords() {
    return this._speakWords;
  }
  set speakWords(speakWords) {
    if (Array.isArray(speakWords) === false) {
      throw new TypeError("enter the array");
    }
    if (speakWords.some((element) => typeof element !== "string")) {
      throw new TypeError("enter words in array");
    }
    this._speakWords = speakWords;
  }
}

try {
  console.group();
  const squirrel = new Squirrel("Kate", "red");
  console.log(squirrel);
  console.log(squirrel.jump());
  console.groupEnd();

  console.group();
  const squirrelFly = new SquirrelFly("Rod", "green", 12);
  console.log(squirrelFly);
  console.log(squirrelFly.fly());
  console.groupEnd();

  console.group();
  const squirrelMagic = new SquirrelMagic("Oly", "pink", 13, arrySquirrelWords);
  console.log(squirrelMagic);
  squirrelMagic.speak();
  console.groupEnd();
} catch (error) {
  console.log(error.message);
}
