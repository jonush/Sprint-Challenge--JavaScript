// 1. Copy and paste your prototype in here and refactor into class syntax.

// prototype
// function CuboidMaker(length, width, height){
// 	this.length = length;
// 	this.width = width;
// 	this.height = height;
// }

class CuboidMaker2 {
    constructor(attributes2){
        this.length = attributes2.length;
        this.width = attributes2.width;
        this.height = attributes2.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4, 
    width: 5, 
    height: 5,
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(attributes3){
        super(attributes3);
    }
    cubeV() {
        return Math.pow(this.length, 3);
    }
    cubeSA() {
        return (6 * (Math.pow(this.length, 2)));
    }
}

const cube = new CubeMaker({
    length: 7, 
    width: 7, 
    height: 7,
});

console.log(cube.cubeV());
console.log(cube.cubeSA());