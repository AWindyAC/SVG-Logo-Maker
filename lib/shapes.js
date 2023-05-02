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
module.exports = Shape;