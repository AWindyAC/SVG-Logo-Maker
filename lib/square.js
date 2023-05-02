const Shape =  require('shapes');

class Square extends Shape{
    render(){
        return `<svg height= "500" width= "500" xmin = "http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill="${this.color}"/>
        <text fill="${this.color}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`;

    }
}

module.exports = Square;