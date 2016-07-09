//cloud size
var dimC =45;
// base y value
var dimy = 106;
// base x value
var dimx = 50;
background(115, 221, 235);
noStroke();
fill(250, 250, 250);

//leftmost cloud
ellipse(dimx+0,dimy+0,dimC,dimC);
ellipse(dimx+32,dimy+0,dimC,dimC);
ellipse(dimx+64,dimy+0,dimC,dimC);
ellipse(dimx+96,dimy+0,dimC,dimC);
ellipse(dimx+51,dimy+-30,dimC,dimC);
ellipse(dimx+77,dimy+-29,dimC,dimC);
ellipse(dimx+19,dimy+-30,dimC,dimC);

//rightmost cloud
var dimx1 =250;
var dimy1 = 189;

ellipse(dimx1+0,dimy1+0,dimC,dimC);
ellipse(dimx1+32,dimy1+0,dimC,dimC);
ellipse(dimx1+64,dimy1+0,dimC,dimC);
ellipse(dimx1+96,dimy1+0,dimC,dimC);
ellipse(dimx1+51,dimy1+-30,dimC,dimC);
ellipse(dimx1+77,dimy1+-29,dimC,dimC);
ellipse(dimx1+19,dimy1+-30,dimC,dimC);

//Start button
fill(68, 0, 255);
stroke(219, 153, 219);
rect(82,302,257,74);
fill(255, 255, 255);
textSize(77);
text("START",85,312,236,173);



if (mouseX>82 && mouseY>302 && mouseX<339 && mouseY<376){
    var draw = function() {
    background(117, 209, 120);    
    };
    
}
     



/*
background(163, 230, 255);
var CPU = {
    x:35,
    y:45,
    width:80
    
};

var a = 0;
var b = 1;
var c = 3;
var d = 0;
draw = function() {
    noStroke();
    fill(229, 123, 235);
    background(163,230,255);
     rect(20,a,30,70,10);
    fill(123, 209, 150);
     rect(350,d,30,70,10);
     a+=b;
     d+=c; 
     
    if (a === 0) {
     b*=-1;
     }
    if (d === 330) {
     c*=-1;
     }
     
    if (a === 330) {
        b*=-1;
        
    }
    if (d===0) {
        c*=-1;
    }
    
    
};*/