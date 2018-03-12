# Pixel Project
This image filter combines two images by splitting the images into bands that alternate either horizontally or vertically. 

# Usage and Tips
If you would like to use this filter with your own images, you can follow these steps:
1. Download the project as a ZIP file
2. Add any images you would like to use into the "images" folder
3. Open "sketch.js" in your prefered text editor (I recommend Atom) and change the loaded image files to the files you would like to use
4. Open your console and run the downloaded folder on localhost
5. Open up your web browser of choice, go to localhost, and filter away!

Some tips:
1. For best picture quality, shrink your image in the filter so that it fits the screen, manipulate until you like it, then size it out again to download the file. This way your file will be much larger but still have the desired filter effect. 
2. Use two images of the same dimensions. They can have different image quality (even though one image may look grainy), but it's important that the height and width ratios are the same.

# Boundary Cases and Limits
As mentioned in the tips section, the filter is not designed to work with two pictures of different dimension ratios. You could technically use two images with different ratios; however, one would be stretched/compressed when combining the two, which would most likely have a negative effect on the overall filtered image. This filter also does not work on mobile devices such as phones. There is also some considerable lag in the program, which, while not eliminated, can be somewhat lessened by using lower quality images. 

# Inspirations
I first got my idea from a piece of sample code called "objectImage.js" from Lizzy Brooks https://github.com/lizzybrooks/pixelsProject, as it made me consider what kind of effects could arise from the manipulation of images via rectangular selection and manipulation. I was also inspired by the cover of last year's Lick-Wilmerding LitMag, which consisted of rows of color-enhanced rectangular images. I thought that it would be interesting to be able to manipulate multiple images whose colors complimented each other, as this cover did.
