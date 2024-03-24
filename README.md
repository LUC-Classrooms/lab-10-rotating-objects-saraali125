# Lab 10 - Rotating Objects

*Rotate an object on the canvas.*

In P5, if you want to rotate and move objects independently on screen, it's really helpful to know how to use ```push()``` and ```pop()``` correctly. Once you have those two functions in place, you can use ```translate()```, ```rotate()```, and ```scale()``` and only affect one object at a time. In this lab, you will get a little practice doing this with a really simple object.

## Instructions:

1. Modify the **```display()```** method of the *```*myClass()```** object constructor function so that it
* creates a new layer with **```push()```**
* moves the origin point to the object's x and y location using **```translate()```**
* _rotates_ the image around the new origin point using ```rotate()``` and the object's angle property
* (optional) scales the image using ```scale()```
* draws the image with x and y **positions at 0**
* resets the layer with **```pop()```**
2. Add a **```spin()```** method to the **```myClass()```** object constructor function. It should affect the **```.angle```** property of the object. You might et it up to take an argument that sets the rotation speed and direction. That's up to you (more fun if you do, though!).
3. **Call** the ```spin()``` method **for each object** in the appropriate **```if()```** statements (each one checks to see if you clicked the mouse on a specific object)

Each square should spin independently while you press the mouse on it.

### When you're done:

* **commit** on GitHub as "Lab 10 submitted"
* **download** a .zip archive of your work and submit on Sakai (.zip archive + link)
  
  