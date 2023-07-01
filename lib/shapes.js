class Shape{
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color){
        this.color = color;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
}

class Square extends Shape{
    render(){
        return `<svg height= "500" width= "500" xmin = "http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill="${this.color}"/>
        <text fill="${this.color}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`;

    }
}

class Triangle extends Shape{
    render(){
        return `<svg height= "500" width= "500" xmin = "http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text fill="${this.color}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }
}

class Circle extends Shape{
    render(){
        return `<svg height= "500" width= "500" xmin = "http://www.w3.org/2000/svg">
        <circle cx="250" cy="250" r="250" fill="${this.color}"/>
        <text fill="${this.color}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`;

    }
}

module.exports = {Square, Circle, Triangle};