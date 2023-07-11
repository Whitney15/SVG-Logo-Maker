const {Square, Circle, Triangle} = require("./shapes")

// Square
describe("Square test", () => {
    test("test for a square with a #34d0eb background", () => {
      const shape = new Square();
      shape.setColor("#34d0eb");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="140" height="140" fill="#34d0eb" />'
      );
    });
  });

// Circle
describe("Circle test", () => {
    test("test for a circle with a #c0eb34 background", () => {
      const shape = new Circle();
      shape.setColor("#c0eb34");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#c0eb34" />'
      );
    });
  });
// Triangle
describe("Triangle test", () => {
    test("test for a triangle with a #eb3499 background", () => {
      const shape = new Triangle();
      shape.setColor("#eb3499");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="#eb3499" />'
      );
    });
  });

