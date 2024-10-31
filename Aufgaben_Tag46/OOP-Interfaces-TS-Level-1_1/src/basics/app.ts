import IShape from "../contracts/IShape";
import Circle from "../classes/Circle";
import Rectangle from "../classes/Rectangle";

// Level 1_1
const circleOne = new Circle("circle", "purple", 5);
const circleTwo = new Circle("circle", "green", 10);
const circleThree = new Circle("circle", "gray", 15);

circleOne.draw();
circleTwo.draw();
circleThree.draw();
console.log(circleOne);
console.log(circleTwo);
console.log(circleThree);

// Level 1_2
const rectangleOne = new Rectangle("Rectangle One", "purple", 90, 45)
const rectangleTwo = new Rectangle("Rectangle Two", "green", 100, 50);
const rectangleThree = new Rectangle("Rectangle Three", "gray", 160, 80);
console.log(rectangleOne);
console.log(rectangleTwo);
console.log(rectangleThree);



