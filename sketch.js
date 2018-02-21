var img1;
var img2;
var imgc1;
var imgc2;
var imgShift = -215;
var controlShiftX = 215;
var controlShiftY = 227;
var sbShiftX = -8;
var sbShiftY = -6;
var numStripesSlider, stripeSizeSlider, zoomSlider, patternSlider;
var saveButton;
var fileName;
var savedFile;

function preload() {
  img1 = loadImage("images/florence.JPG");
  img2 = loadImage("images/yflorence.JPG");
}

function setup() {
  var imgc1 = createImage(img1.width, img1.height);
  imgc1.copy(img1, 0, 0, img1.width, img1.height, 0, 0, img1.width, img1.height);
  var imgc2 = createImage(img2.width, img2.height);
  imgc2.copy(img2, 0, 0, img2.width, img2.height, 0, 0, img2.width, img2.height);

  createCanvas(img1.width + 500, img1.height);
  console.log("first image width: " + img1.width + " height: " + img1.height);
  console.log("second image width: " + img2.width + " height: " + img2.height);
  imgc1.resize(202, 0);
  imgc2.resize(202, 0);
  image(imgc1, 5, 220 + imgShift, 202, imgc1.height);
  image(imgc2, 5, imgc1.height + 235 + imgShift, 202, imgc2.height);

  numStripesSlider = createSlider(2, 1000, 50);
  numStripesSlider.position(27 + controlShiftX + sbShiftX, 35 + controlShiftY + sbShiftY);
  stripeSizeSlider = createSlider(5, 300, 7);
  stripeSizeSlider.position(27 + controlShiftX + sbShiftX, 85 + controlShiftY + sbShiftY);
  zoomSlider = createSlider(1, 10, 1, 1/4);
  zoomSlider.position(27 + controlShiftX + sbShiftX, 135 + controlShiftY + sbShiftY);
  patternSlider = createSlider(1, 2, 1);
  patternSlider.position(27 + controlShiftX + sbShiftX, 185 + controlShiftY + sbShiftY);

  fileName = createInput();
  fileName.position(27 + controlShiftX + sbShiftX, 235 + controlShiftY + sbShiftY);
  saveButton = createButton('go!');
  saveButton.position(168 + controlShiftX + sbShiftX, 235 + controlShiftY + sbShiftY);
  saveButton.mousePressed(savePicture);

  strokeWeight(2);
  rect(6 + controlShiftX, -221 + controlShiftY, 200, 206);

  textSize(15);
  strokeWeight(0);
  fill(0);
  text('split two images either\nhorizontally or vertically!\n\nuse two images with the \nsame dimensions!\n\npro tip: save image at\nzoom = 1 for better quality!\n\ncreated by Sammy Puckett', 18 + controlShiftX, -197 + controlShiftY);
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
  text('save (file name)', 20 + controlShiftX, 220 + controlShiftY);

  if(patternSlider.value() == 1){
    text('pattern = horizontal', 20 + controlShiftX, 175 + controlShiftY);
  } else {
    text('pattern = vertical', 20 + controlShiftX, 175 + controlShiftY);
  }

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
