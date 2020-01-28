class Options {
    constructor(height = 200, width = 300, bg = 'red', fontSize = 25, textAlign = 'center'){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text) {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.textContent = text;
        newDiv.style.height = this.height +'px';
        newDiv.style.width = this.width+'px';
        newDiv.style.background = this.bg;
        newDiv.style.fontSize = this.fontSize+'px';
        newDiv.style.textAlign = this.textAlign;

    }
}

// let test = new Options(200,300,'green',18,'center');