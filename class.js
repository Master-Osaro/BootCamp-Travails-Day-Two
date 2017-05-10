function circle(type,radius) {
 //this is a circle class with functions
    this.type = type;
    this.radius = radius;
    this.Pi = Math.PI;
    this.getInfo = getShapeInfo;
    this.diameter = getDiameter;
    this.circumference = getCircumference;
    this.area = getArea;
    this.lenghtOfArc = getLengthOfArc;
    this.areaOfSector = getAreaOfSector;   
}
function getShapeInfo() {
    return this.type + ' Properties: ' ;
}
function getDiameter() {
	let D = 2 * this.radius;
	return "Diameter of the Circle is: " + D;
}
function getCircumference(){
    let Circumference = 2 * this.radius* this.Pi;
	return "Circumference of the Circle is: " + Circumference.toFixed(2).toString();

}
function getArea(){
	R = this.radius;
	Pi = this.Pi;
	let _Area = Pi * Math.pow(R,2);
	return "Area of the Circle is: " + _Area.toFixed(2).toString();
}

function getLengthOfArc(Tita){
	R = this.radius;
	Pi = this.Pi;
    let LengthOfArc = Tita * (Pi/180) * R;
    return "Length of an Arc in this Circle with an angle of " + Tita + " is " + LengthOfArc.toFixed(2).toString()
}
function getAreaOfSector(Tita){
    R = this.radius;
	Pi = this.Pi;
    let AreaOfSector = (Tita/360)*Pi*Math.pow(R,2);
    return "Area of a sector in this Circle with an angle of " + Tita + " is " +AreaOfSector.toFixed(2).toString();
}
let Circle1 = new circle('Circle',10);
console.log(Circle1.getInfo());
console.log(Circle1.diameter());
console.log(Circle1.circumference());
console.log(Circle1.area());
console.log(Circle1.lenghtOfArc(30));
console.log(Circle1.areaOfSector(30));
