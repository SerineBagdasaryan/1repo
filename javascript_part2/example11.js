function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    this.show = function () {
        var rec = `<div style="background:red;width:${this.width}px;height:${this.height}px;"></div>`;
        document.write(rec);
    };
}


var example = new Rectangle(300, 200);
example.show();


