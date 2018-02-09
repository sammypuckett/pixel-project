var img1;
var img2;
var img3;
var imgShift = -215;
var controlShiftX = 215;
var controlShiftY = 5;
var originalZoom = 15; //change based off of size of original pictures (will make slider in interface later)
var numStripesSlider, stripeSizeSlider, zoomSlider, patternSlider;

function preload() {  //sometimes img1 and img2 won't load correctly aka they will be loaded with width = height = 1 (not yet sure what's up with the libraries)
  img1 = loadImage("images/florence.jpg");
  img2 = loadImage("images/yflorence.jpg");
  img3 = loadImage("images/yflorence2.jpg"); //second image won't load without loading a third image??? not sure whats going on
}

function setup() {
  createCanvas(img1.width + 240, img1.height);
  image(img1, 5, 220 + imgShift, 202, img1.height/originalZoom); //image(img1, 5, 220 + imgShift, img1.width/originalZoom, img1.height/originalZoom);
  image(img2, 5, img1.height/originalZoom + 235 + imgShift, 202, img2.height/originalZoom); //image(img2, 5, img1.height/originalZoom + 235 + imgShift, img2.width/originalZoom, img2.height/originalZoom);
  console.log("first image width: " + img1.width + " height: " + img1.height);
  console.log("second image width: " + img2.width + " height: " + img2.height);

  numStripesSlider = createSlider(2, 1000, 50);
  numStripesSlider.position(27 + controlShiftX, 35 + controlShiftY);
  stripeSizeSlider = createSlider(5, 300, 7);
  stripeSizeSlider.position(27 + controlShiftX, 85 + controlShiftY);
  zoomSlider = createSlider(1, 10, 1, 1/4);
  zoomSlider.position(27 + controlShiftX, 135 + controlShiftY);
  patternSlider = createSlider(1, 2, 1); //maybe replace with a button?
  patternSlider.position(27 + controlShiftX, 185 + controlShiftY);

}

function draw() {
  noStroke();
  fill(255);
  rect(225, 0, img1.width + 100, img1.height + img2.height);
  stroke(0);
  strokeWeight(2);
  rect(6 + controlShiftX, 1 + controlShiftY, 200, 205);

  var numstripes = numStripesSlider.value();
  var stripesize = stripeSizeSlider.value();
  var zoom = zoomSlider.value();
  var shape = patternSlider.value(); //maybe replace with a button?
  var horizontal = false;

  textSize(15);
  strokeWeight(0);
  fill(0);
  text('number of stripes = ' + numStripesSlider.value(), 20 + controlShiftX, 25 + controlShiftY);
  text('stripe size = ' + stripeSizeSlider.value(), 20 + controlShiftX, 75 + controlShiftY);
  text('zoom = 1/' + zoomSlider.value(), 20 + controlShiftX, 125 + controlShiftY);

  if(patternSlider.value() == 1){ //maybe replace with a button?
    text('pattern = horizontal', 20 + controlShiftX, 175 + controlShiftY);
  } else {
    text('pattern = vertical', 20 + controlShiftX, 175 + controlShiftY);
  }

  //image(img,dx,dy,dWidth,dHeight,sx,sy,sWidth,sHeight)
  //dx = x coord of destination rectangle, dy = y coord of destination rectangle
  //dWidth = width of the destination rectangle, dHeight = height of the destination rectangle
  //sx = x coord of subsection of source image, sy = y coord of subsection of source images
  //sWidth = width of subsection of source image, sHeight = height of subsection of source image
  //see https://p5js.org/reference/#/p5/image for more info

  if(patternSlider.value() == 1){
    for(i=0; i<numstripes; i+=2) {  //horizontal
      image(img1, 435, 5 + (stripesize*i)/zoom, img1.width/zoom, stripesize/zoom, 0, stripesize*i, img1.width, stripesize);
      image(img2, 435, 5 + (stripesize*(i+1))/zoom, img2.width/zoom, stripesize/zoom, 0, stripesize*(i+1), img2.width, stripesize);
    }
  } else {
    for(i=0; i<numstripes; i+=2) {  //vertical
      image(img1, 435 + (i*stripesize)/zoom, 5, stripesize/zoom, img1.height/zoom, stripesize*i, 0, stripesize, img1.height);
      image(img2, 435 + ((i+1)*stripesize)/zoom, 5, stripesize/zoom, img2.height/zoom, stripesize*(i+1), 0, stripesize, img2.height);
    }
  }

}

/*
var img1;
var img2;
var img3;
var imgShift = -215;
var controlShiftX = 215;
var controlShiftY = 5;
var originalZoom = 15; //change based off of size of original pictures (will make slider in interface later)
var numStripesSlider, stripeSizeSlider, zoomSlider, patternSlider;

function preload() {  //sometimes img1 and img2 won't load correctly aka they will be loaded with width = height = 1 (not yet sure what's up with the libraries)
  img1 = loadImage("florence.jpg");
  img2 = loadImage("yflorence.jpg");
  img3 = loadImage("yflorence2.jpg"); //second image won't load without loading a third image??? not sure whats going on
}

function setup() {
  createCanvas(img1.width + 240, img1.height);
  image(img1, 5, 220 + imgShift, 202, img1.height/originalZoom); //image(img1, 5, 220 + imgShift, img1.width/originalZoom, img1.height/originalZoom);
  image(img2, 5, img1.height/originalZoom + 235 + imgShift, 202, img2.height/originalZoom); //image(img2, 5, img1.height/originalZoom + 235 + imgShift, img2.width/originalZoom, img2.height/originalZoom);
  console.log("first image width: " + img1.width + " height: " + img1.height);
  console.log("second image width: " + img2.width + " height: " + img2.height);

  numStripesSlider = createSlider(2, 1000, 50);
  numStripesSlider.position(20 + controlShiftX, 35 + controlShiftY);
  stripeSizeSlider = createSlider(5, 300, 7);
  stripeSizeSlider.position(20 + controlShiftX, 85 + controlShiftY);
  zoomSlider = createSlider(1, 10, 1, 1/4);
  zoomSlider.position(20 + controlShiftX, 135 + controlShiftY);
  patternSlider = createSlider(1, 2, 1); //maybe replace with a button?
  patternSlider.position(20 + controlShiftX, 185 + controlShiftY);

}

function draw() {
  noStroke();
  fill(255);
  rect(225, 0, img1.width + 100, img1.height + img2.height);
  stroke(0);
  strokeWeight(2);
  rect(6 + controlShiftX, 1 + controlShiftY, 200, 205);

  var numstripes = numStripesSlider.value();
  var stripesize = stripeSizeSlider.value();
  var zoom = zoomSlider.value();
  var shape = patternSlider.value(); //maybe replace with a button?
  var horizontal = false;

  textSize(15);
  strokeWeight(0);
  fill(0);
  text('number of stripes = ' + numStripesSlider.value(), 20 + controlShiftX, 25 + controlShiftY);
  text('stripe size = ' + stripeSizeSlider.value(), 20 + controlShiftX, 75 + controlShiftY);
  text('zoom = 1/' + zoomSlider.value(), 20 + controlShiftX, 125 + controlShiftY);

  if(patternSlider.value() == 1){ //maybe replace with a button?
    text('pattern = horizontal', 20 + controlShiftX, 175 + controlShiftY);
  } else {
    text('pattern = vertical', 20 + controlShiftX, 175 + controlShiftY);
  }

  //image(img,dx,dy,dWidth,dHeight,sx,sy,sWidth,sHeight)
  //dx = x coord of destination rectangle, dy = y coord of destination rectangle
  //dWidth = width of the destination rectangle, dHeight = height of the destination rectangle
  //sx = x coord of subsection of source image, sy = y coord of subsection of source images
  //sWidth = width of subsection of source image, sHeight = height of subsection of source image
  //see https://p5js.org/reference/#/p5/image for more info

  if(patternSlider.value() == 1){
    for(i=0; i<numstripes; i+=2) {  //horizontal
      image(img1, 435, 5 + (stripesize*i)/zoom, img1.width/zoom, stripesize/zoom, 0, stripesize*i, img1.width, stripesize);
      image(img2, 435, 5 + (stripesize*(i+1))/zoom, img2.width/zoom, stripesize/zoom, 0, stripesize*(i+1), img2.width, stripesize);
    }
  } else {
    for(i=0; i<numstripes; i+=2) {  //vertical
      image(img1, 435 + (i*stripesize)/zoom, 5, stripesize/zoom, img1.height/zoom, stripesize*i, 0, stripesize, img1.height);
      image(img2, 435 + ((i+1)*stripesize)/zoom, 5, stripesize/zoom, img2.height/zoom, stripesize*(i+1), 0, stripesize, img2.height);
    }
  }

}*/