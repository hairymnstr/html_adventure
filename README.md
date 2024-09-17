# A very simple text adventure framework

This is the most minimal text-adventure in HTML framework I could come up with.
I thought it up as a demo for young coders (under 10) to see how they could create interactive fiction using what they had learned in [code club HTML](https://projects.raspberrypi.org/en/pathways/webdev-module-1).

The idea is to create a text-advnture like experience using tools that everyone should have available on a computer.  All you need to edit and extend this demo is a text editor and you can interact with the results using a web-browswer on your local machine without needing a server, framework, development environment or tools.  It's inspired by my own early coding exploits when I spent a lot of time writing very long BBC BASIC programs which were just long lists of `GOTO` and `PRINT` statements to make up text adventures.

Initially it was just plain HTML and a sequence of steps to navigate but quickly the idea of an inventory and finding items was raised.  I've made a really minimal javascript library to wrap a little logic so you can just use classes to show and hide options based on inventory without needing to actually write any javascript.

My goal was to keep it simple enough that an under 10 year old could copy and paste locations and change the text to make up their own story.  I didn't want learning a framework or managing dependencies to get in the way of the creativity.

I've tested it in Firefox on Linux but that's all, there are some weird edge-cases when using `file://` URLs and storage APIs so it may not work on other platforms.
