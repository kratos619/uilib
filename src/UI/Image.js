const { BaseElement } = require("./BaseElement");

export class Image extends BaseElement{
    constructor(imgPath){
        super();
        this.imgPath = imgPath;
    }

    getElementString(){
        return `<img src="${this.imgPath}" />`;
    }
    
}