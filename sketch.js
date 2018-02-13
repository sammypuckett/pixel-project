var img1;
var img2;
var img3;
var imgc1;
var imgc2;
var imgShift = -215;
var controlShiftX = 215;
var controlShiftY = 5;
var numStripesSlider, stripeSizeSlider, zoomSlider, patternSlider;
var saveButton;
var fileName;
var savedFile;

function preload() {
  img1 = loadImage("blob/master/images/florence.JPG");
  imgc1 = loadImage("blob/master/images/florence.JPG"); //same image as img1
  img2 = loadImage("blob/master/images/yflorence.JPG");
  imgc2 = loadImage("blob/master/images/yflorence.JPG"); //same image as img2
  img3 = loadImage("blob/master/images/yflorence2.JPG");
}

function setup() {
  createCanvas(img1.width + 500, img1.height);
  imgc1.resize(202, 0);
  imgc2.resize(202, 0);
  image(imgc1, 5, 220 + imgShift, 202, imgc1.height);
  image(imgc2, 5, imgc1.height + 235 + imgShift, 202, imgc2.height);
  console.log("first image width: " + img1.width + " height: " + img1.height);
  console.log("second image width: " + img2.width + " height: " + img2.height);

  numStripesSlider = createSlider(2, 1000, 50);
  numStripesSlider.position(27 + controlShiftX, 35 + controlShiftY);
  stripeSizeSlider = createSlider(5, 300, 7);
  stripeSizeSlider.position(27 + controlShiftX, 85 + controlShiftY);
  zoomSlider = createSlider(1, 10, 1, 1/4);
  zoomSlider.position(27 + controlShiftX, 135 + controlShiftY);
  patternSlider = createSlider(1, 2, 1);
  patternSlider.position(27 + controlShiftX, 185 + controlShiftY);

  fileName = createInput();
  fileName.position(27 + controlShiftX, 235 + controlShiftY);
  saveButton = createButton('go!');
  saveButton.position(168 + controlShiftX, 235 + controlShiftY);
  saveButton.mousePressed(savePicture);

}

function draw() {
  noStroke();
  fill(255);
  rect(435, 0, img1.width, img1.height + img2.height);
  stroke(0);
  strokeWeight(2);
  rect(6 + controlShiftX, 1 + controlShiftY, 200, 255);

  var numstripes = numStripesSlider.value();
  var stripesize = stripeSizeSlider.value();
  var zoom = zoomSlider.value();
  var shape = patternSlider.value();
  var horizontal = false;

  textSize(15);
  strokeWeight(0);
  fill(0);
  text('number of stripes = ' + numStripesSlider.value(), 20 + controlShiftX, 25 + controlShiftY);
  text('stripe size = ' + stripeSizeSlider.value(), 20 + controlShiftX, 75 + controlShiftY);
  text('zoom = 1/' + zoomSlider.value(), 20 + controlShiftX, 125 + controlShiftY);
  text('save (name)', 20 + controlShiftX, 220 + controlShiftY);

  if(patternSlider.value() == 1){
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

  savedFile = get(435, 5, img1.width/zoom, img1.height/zoom);
}

function savePicture() {
  save(savedFile, fileName.value() + '.jpg');
}
