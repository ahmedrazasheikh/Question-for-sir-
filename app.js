
console.log("Working Properly")

function swapPic(eId, newPic) {
     document.getElementById(eId).src = newPic;
     }


     function makeBig() {
          document.getElementById("p1").className += " big";
         }

//      If you want to add a class to an element, preserving its existing classes, you can do it. For
// example, suppose you have a paragraph with a class that styles it in Verdana, size 1 em. When
// the user mouses over it, you want to double its size to 2 em. But you don't want to lose the
// Verdana styling of its original class. Rather than replace the class that styles it in Verdana, you
// want to retain that class and add the class that enlarges the font. Let's say the element has the id
// 164
// "p1". This is the function.
// 1 function makeBig() {
// 2 document.getElementById("p1").className += " big";
// 3 }
// Compared with the code that replaces all the existing classes with a new one, this code
// has two small differences.
// It's += instead of just =.
// A space before the class name is req