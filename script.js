var w = window.innerWidth;
var h = window.innerHeight;

var sel;

function setup() {
    var cnv = createCanvas(w, h);

    //create select option for medium change
    sel = createSelect();
    sel.position(10, 10);
    sel.option('Plain White', 0);
    sel.option('Black', 1);
    sel.option('Lined', 2);
    sel.option('Graphing Paper', 3); //assign value of option
    sel.selected('Plain White');
    sel.changed(changeMedium);

}

function draw() {
    //background(200);
}

//Changes medium based on select box option
function changeMedium() {
    var v = sel.value();

    if (v == 0) {
        background(255);
    }
    else if (v == 1) {
        background(30);
    }
    else if (v == 2) {
        background(255);
        for (var i = 0; i < h; i+= 25) {
            line(0, i, w, i);
        }
    }
    else {
        background(255);
        for (var i = 0; i < h; i+= 20) {
            line(0, i, w, i);
        }
        for (var j = 0; j < w; j+= 20) {
            line(j, 0, j, h);
        }
    }
}