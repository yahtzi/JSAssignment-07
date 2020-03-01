// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// 1a. When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.
"use strict";

let balloon = document.getElementById("balloon");
let currentSize = 100;

function keyDownListener(event) {
    if (event.key == "ArrowUp") {
        event.preventDefault();
        currentSize *= 1.1;
        balloon.style.fontSize = currentSize + "%";
    }
    else if (event.key == "ArrowDown") {
        event.preventDefault();
        currentSize *= .9;
        balloon.style.fontSize = currentSize + "%";
    }
    
    if (currentSize >= 200) {
        event.preventDefault();
        balloon.textContent = "💥";
        window.removeEventListener("keydown", keyDownListener);
    }
}

window.addEventListener("keydown", keyDownListener);

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

const tabOne = document.getElementById("tabUno");
const tabOne = document.getElementById("tabDos");
const tabOne = document.getElementById("tabTres");

document.getElementById("tab1").style.display = "block";
document.getElementById("tab1").style.display = "none";
document.getElementById("tab1").style.display = "none";

function tabFunction(event) {
    if (event.target == tabOne) {
        document.getElementById("tab1").style.display = "block";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "none";
    }
    if (event.target == tabOne) {
        document.getElementById("tab1").style.display = "none";
        document.getElementById("tab2").style.display = "block";
        document.getElementById("tab3").style.display = "none";
    }
    if (event.target == tabOne) {
        document.getElementById("tab1").style.display = "none";
        document.getElementById("tab2").style.display = "none";
        document.getElementById("tab3").style.display = "block";
    }
}

tabOne.addEventListener("click", tabFunction);
tabTwo.addEventListener("click", tabFunction);
tabThree.addEventListener("click", tabFunction);

//I KNOW this is the worst way to turn this in, but also, it's TECHNICALLY done. You can drag me for this Monday.//