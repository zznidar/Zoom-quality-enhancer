// For usage with Zoom in broswer
/* Experiments show that the received quality of speaker's video is increased
when you (the reciever) zoom-in the browser (Ctrl + scroll wheel up) 
and then change the size of the camera view.

However, the quality is reduced again when someone else starts speaking.
To keep the quality, we have to change the size once again. */

var smally = document.getElementsByClassName("suspension-window-container__tab suspension-window-container__tab-2")[0];
var biggy = document.getElementsByClassName("suspension-window-container__tab suspension-window-container__tab-3")[0];

function enhance() {
    smally.click();
    biggy.click();
}
