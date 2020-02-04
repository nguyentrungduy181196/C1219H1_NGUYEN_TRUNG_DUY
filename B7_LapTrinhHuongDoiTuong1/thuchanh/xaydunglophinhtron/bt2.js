let radius;
let Circle = function(radius) {

    this.radius = radius;

}
this.getRadius = function() {
    return radius;
}
this.getArea = function() {
    return Math.PI * radius * radius;
}
let circle = new Circle(2);
circle.getRadius = function () {
    return undefined;
}
let radius = circle.getRadius(); // 2

circle.getArea = function () {
    return undefined;
}
let area = circle.getArea(); // 12.566370614359172
alert("radius: " + radius + "; area: " + area);