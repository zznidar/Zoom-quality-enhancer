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



// Based on Mozilla MDN example, which is in the Public Domain (CC0): https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#Example
function begin() {
    console.log("Inside begin function.");
    // Select the node that will be observed for mutations
    const targetNode = document.getElementsByClassName("video-in-sharing-container__avatar")[0];

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
            }
            else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }

        console.log("Probably new speaker");
        console.log(document.getElementsByClassName("video-in-sharing-container__avatar")[0].innerText);

        // Auto-enhance quality
        enhance();

    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
}