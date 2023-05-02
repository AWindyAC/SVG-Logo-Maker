const Circle = require('./circle');


function generateLogo(data) {
    let shape = undefined;
    if (data.shape === 'Circle') {
        shape = new Circle(data.shapeColor, data.color, data.textColor);
    }
    return shape.render();
}

module.exports = generateLogo;